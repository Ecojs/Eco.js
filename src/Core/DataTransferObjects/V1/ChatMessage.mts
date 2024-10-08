import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';
import { User } from './User.mjs';

export interface IChatMessage {
  readonly Timestamp: number;
  readonly Sender?: string;
  readonly Receiver?: string;
  readonly Text?: string;
}

export class ChatMessage extends ClientObjectBase implements IChatMessage {
  public readonly Timestamp: number;
  public readonly Sender?: string;
  public readonly Receiver?: string;
  public readonly Text?: string;
  constructor(client: ECO, $b: IChatMessage = {} as IChatMessage) {
    super(client);
    this.Timestamp = $b.Timestamp;
    this.Sender = $b.Sender;
    this.Receiver = $b.Receiver;
    this.Text = $b.Text;
  }
  get timestampDate() {
    return this.client.convertDurationToDate(this.Timestamp);
  }
  get senderUser() {
    return new User(this.client, { Name: this.Sender as string });
  }
  get receiverUser() {
    return new User(this.client, { Name: this.Receiver as string });
  }
  public toString(): string {
    try {
      return `[${this.timestampDate
        .toISOString()
        .replace(/[TZ]/g, ' ')
        .trim()}] #${this.Receiver} ${this.Sender}: ${this.Text}`;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      return `${this.Sender}: ${this.Text}`;
    }
  }
}
