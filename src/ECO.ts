import EventEmitter from 'events';
import { Socket } from 'net';
import events from 'events';
import net from 'net';
import RCONParser from './parser/RCONParser';

enum PacketType {
  COMMAND = 0x02,
  AUTH = 0x03,
  RESPONSE_VALUE = 0x00,
  RESPONSE_AUTH = 0x02,
}

type RconResponse = {
  size: number;
  id: number;
  type: number;
  body: string;
}

/**!
 * node-rcon
 * Copyright(c) 2012 Justin Li <j-li.net>
 * MIT Licensed
 * Stripped Down and modified by @bombitmanbomb
 */
class Rcon extends EventEmitter {
  public host: string;
  public port: number;
  public password: string;
  public outstandingData: Buffer | null = null;
  public hasAuthed: boolean;
  protected _tcpSocket!: Socket;
  constructor(host: string, port: number, password: string) {
    super();
    this.host = host;
    this.port = port;
    this.password = password;
    this.hasAuthed = false;
    events.EventEmitter.call(this);
  }

  _sendSocket(buf: Buffer): void {
    this._tcpSocket.write(buf.toString('binary'), 'binary');
  }
  connect(): void {
    try {
      this._tcpSocket = net.createConnection(this.port, this.host);
      this._tcpSocket
        .on('data', ((data: Buffer): void => {
          this._tcpSocketOnData(data);
        }).bind(this));
      this._tcpSocket
        .on('connect', ((): void => {
          this.socketOnConnect();
        }).bind(this));
      this._tcpSocket
        .on('error', ((err: Error): void => {
          this.emit('error', err);
        }).bind(this));
      this._tcpSocket
        .on('end', ((): void => {
          this.socketOnEnd();
        }).bind(this));
    } catch (error) {
      this.emit('error', error)
    }
  }
  send(data: string, cmd: number, id = 0x0012d4a6) {
    cmd = cmd || PacketType.COMMAND;
    const length: number = Buffer.byteLength(data);
    const sendBuf: Buffer = Buffer.alloc(length + 14);
    sendBuf.writeInt32LE(length + 10, 0);
    sendBuf.writeInt32LE(id, 4);
    sendBuf.writeInt32LE(cmd, 8);
    sendBuf.write(data, 12);
    sendBuf.writeInt16LE(0, length + 12);

    this._sendSocket(sendBuf);
  }
  disconnect(): void {
    if (this._tcpSocket) this._tcpSocket.end();
  }
  setTimeout(timeout: number, callback: () => unknown): void {
    if (!this._tcpSocket) return;
    this._tcpSocket.setTimeout(timeout, ((): void => {
      this._tcpSocket.end();
      if (callback) callback();
    }).bind(this));
  }
  _tcpSocketOnData(data: Buffer): boolean | void {
    if (this.outstandingData != null) {
      data = Buffer.concat(
        [this.outstandingData, data],
        this.outstandingData.length + data.length
      );
      this.outstandingData = null;
    }
    while (data.length >= 12) {
      const len: number = data.readInt32LE(0); // Size of entire packet, not including the 4 byte length field
      if (!len) return; // No valid packet header, discard entire buffer

      const packetLen: number = len + 4;
      if (data.length < packetLen) break; // Wait for full packet, TCP may have segmented it

      const bodyLen: number = len - 10; // Subtract size of ID, type, and two mandatory trailing null bytes
      if (bodyLen < 0) {
        data = data.subarray(packetLen); // Length is too short, discard malformed packet
        break;
      }
      const id: number = data.readInt32LE(4);
      const type: number = data.readInt32LE(8);
      if (id == -1) return this.emit('error', new Error('Authentication failed'));

      if (!this.hasAuthed && type == PacketType.RESPONSE_AUTH) {
        this.hasAuthed = true;
        this.emit('auth');
      } else if (type == PacketType.RESPONSE_VALUE) {
        // Read just the body of the packet (truncate the last null byte)
        // See https://developer.valvesoftware.com/wiki/Source_RCON_Protocol for details
        let str: string = data.toString('utf8', 12, 12 + bodyLen);

        if (str.charAt(str.length - 1) === '\n') {
          // Emit the response without the newline.
          str = str.substring(0, str.length - 1);
        }

        const response = {
          size: data.readInt32LE(0),
          id: data.readInt32LE(4),
          type: data.readInt32LE(8),
          body: str,
        };
        this.emit('response', response);
      }

      data = data.subarray(packetLen);
    }

    // Keep a reference to remaining data, since the buffer might be split within a packet
    this.outstandingData = data;
  }


  socketOnConnect(): void {
    this.emit('connect');
    this.send(this.password, PacketType.AUTH);
  }
  socketOnEnd(): void {
    this.emit('end');
    this.hasAuthed = false;
  }
}

type ResponsePromiseQueueObject = {
  time: Date;
  buffer: string;
  handled: boolean;
  resolve: (data: unknown) => void;
  reject: (reason: unknown) => void;
  timeOut: NodeJS.Timeout;
}

type ECOOptions = {
  disableAutoStatus: boolean
}

/**
 * Primary Interface Object for ECO servers.
 */
export default class ECO {
  /**
   * Rejects if an error occurs when connecting.
   */
  public onReady!: Promise<null>;
  public rconParser!: RCONParser;
  protected messageID!: number;
  protected _conn!: Rcon;
  protected _isAuthorized!: boolean;
  protected _responsePromiseQueue!: Map<number, ResponsePromiseQueueObject>;
  public debug = false
  /**Reconnect to the client */
  public reconnect!: () => Promise<unknown>
  public _events!: EventEmitter
  constructor(ip: string, port: number, password: string, options?: ECOOptions) {
    Object.defineProperty(this, '_isAuthorized', { enumerable: false, value: false });
    Object.defineProperty(this, 'messageID', { enumerable: false, value: 1 });
    Object.defineProperty(this, '_events', { enumerable: false, value: new EventEmitter });
    Object.defineProperty(this, '_responsePromiseQueue', { enumerable: false, value: new Map });
    Object.defineProperty(this, 'rconParser', { enumerable: false, value: new RCONParser(this) });
    Object.defineProperty(this, '_onResponse', { enumerable: false, value: this._onResponse.bind(this) });
    Object.defineProperty(this, '_onError', { enumerable: false, value: this._onError.bind(this) });
    Object.defineProperty(this, '_onEnd', { enumerable: false, value: this.onEnd.bind(this) });
    Object.defineProperty(this, '_conn', { enumerable: false, value: new Rcon(ip, port, password) });
    const executor = (res: (val: null) => void, rej: (val: unknown) => void) => {
      let handled = false;
      this._conn.once('error', (err) => {
        if (handled) return;
        handled = true;
        rej(err);
      });
      this._conn.once('auth', (): void => {
        if (handled) return;
        handled = true;
        res(null);
      });
      this._conn.connect();
    };
    this._conn
      .on('response', this._onResponse)
      .on('error', this._onError)
      .on('end', this.onEnd);

    Object.defineProperty(this, 'onReady', { enumerable: false, value: new Promise<null>(executor) });
    Object.defineProperty(this, 'reconnect', {
      enumerable: false, value: () => {
        Object.defineProperty(this, 'onReady', { enumerable: false, value: new Promise<null>(executor) });
        return this.onReady
      }
    });
    this.onReady.then(() => {
      this._events.emit('READY')
    })
      .catch((err) => {
        this._events.emit('error', err)
      })
    this._events.on('error', ()=>{
      //Handle Error. Hookable
    })
  }

  public on(event: 'READY', cb: () => void): EventEmitter
  public on(event: Parameters<EventEmitter['on']>[0], cb: Parameters<EventEmitter['on']>[1]): EventEmitter {
    return this._events.on(event, cb);
  }

  public removeListener(event: Parameters<EventEmitter['removeListener']>[0], cb: Parameters<EventEmitter['removeListener']>[1]): EventEmitter {
    return this._events.removeListener(event, cb);
  }

  /**
   * Send a Raw RCON command.
   */
  public send(cmd: string): Promise<unknown> {
    const id: number = this.messageID++;

    return new Promise((resolve, reject) => {
      const ob: ResponsePromiseQueueObject = {
        time: new Date(),
        buffer: '',
        handled: false,
      } as ResponsePromiseQueueObject;
      ob.resolve = (dat: unknown): void => {
        ob.handled = true;
        resolve(dat);
      };
      ob.reject = (dat: unknown): void => {
        ob.handled = true;
        reject(dat);
      };
      //? Timeout in the event of the final packet is Max packet length
      ob.timeOut = setTimeout((): void => {
        if (ob.handled) return;
        ob.handled = true;
        ob.resolve(this._parseResponse(ob.buffer) ?? ob.buffer);
      }, 5000);
      this._responsePromiseQueue.set(id, ob);
      this._conn.send(cmd, 0x02, id);
    });
  }

  protected _onResponse(response: RconResponse): void {
    const size: number = response?.size;
    if (this._responsePromiseQueue.has(response.id)) {
      const q: ResponsePromiseQueueObject = this._responsePromiseQueue.get(response.id) as ResponsePromiseQueueObject;
      if (size >= 4092) {
        //MAX PACKET SIZE, MIGHT BE SPLIT
        q.buffer += response.body;
        return;
      }
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any =
        this._parseResponse((q.buffer ?? '') + response.body) ?? response;
      if (res.success === false) {
        q.reject(res.data);
      } else {
        q.resolve(res.data ?? res);
      }
      this._responsePromiseQueue.delete(response.id);
      return;
    }
    // Non command
    //TODO
  }
  /**
   * Disconnect the client.
   */
  public disconnect(): void {
    this._conn.disconnect();
  }
  protected _parseResponse(res: string): unknown {
    const data: string = res?.replaceAll('\\r\\n', '\n');
    if (data == null || data?.trim?.() == '') return null;
    return this.rconParser.parse(data);
  }
  protected _onError(err: string): void {
    if (this.debug) {
      console.error(err)
    }
    //Handle Error. Hookable
  }
  protected onEnd(): void {
    //TODO: onEnd
  }
}
