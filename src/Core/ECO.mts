import { EventEmitter } from './Utils/EventEmitter/EventEmitter.mjs';
import { ServerInfo } from './Shared/Networking/ServerInfo.mjs';
import {
  AdminController,
  ChatController,
  CommandController,
  DataExportController,
  ElectionController,
  LawController,
  LogController,
  MapController,
  PluginsController,
  ProfilingResultsController,
  RootController,
  StatsController,
  UsersController,
  WorldLayerController,
} from './Controllers/index.mjs';
import { HttpClient } from './HttpClient.mjs';
import { ChatMessage } from './DataTransferObjects/V1/ChatMessage.mjs';
import { BasePlugin } from '../Plugins/BasePlugin.mjs';

type EcoClientOptions = {
  /**
   * Your API key
   * Will read ECO_API_KEY from the env if not set
   */
  api_key?: string;
  /**
   * Your Eco Server Address + port
   * Will read ECO_BASE_URL from the env if not set
   * @example 'http://127.0.0.1:3001'
   */
  base_url?: string;
  /**
   * Time in ms between core data updates
   */
  serverInfoUpdateInterval?: number;
  /**
   * Time in ms between Chat polling requests
   */
  serverChatUpdateInterval?: number;
  /**
   *
   */
  serverVirtualPlayerName?: string;
};
/**
 * API Container
 */
export default class ECO<
  Plugins extends { plugins: Record<string, BasePlugin> },
> {
  public serverVirtualPlayerName: string;
  public HttpClient: HttpClient;
  public admin = new AdminController(this);
  public chat = new ChatController(this);
  public commands = new CommandController(this);
  public dataExport = new DataExportController(this);
  public elections = new ElectionController(this);
  public laws = new LawController(this);
  public logs = new LogController(this);
  public maps = new MapController(this);
  public plugins = new PluginsController(this);
  public profilingResults = new ProfilingResultsController(this);
  public root = new RootController(this);
  public stats = new StatsController(this);
  public users = new UsersController(this);
  public worldLayers = new WorldLayerController(this);
  public server_info!: ServerInfo;
  public isReady: Promise<void>;
  protected _startDate: Date = new Date(0);
  protected _chatFetched = false;
  protected _chatReadInterval!: NodeJS.Timeout;
  protected _chatReadIntervalMS!: number;
  protected _messages!: ChatMessage[];
  public EcoJSPlugins: Plugins['plugins'] = {};
  public _events!: EventEmitter;
  constructor(options: EcoClientOptions = {} as EcoClientOptions) {
    this.serverVirtualPlayerName =
      options.serverVirtualPlayerName ?? '[Server]';
    this.HttpClient = new HttpClient(this, {
      base_url: options.base_url ?? process.env.ECO_BASE_URL,
      api_key: options.api_key ?? process.env.ECO_API_KEY,
    });
    Object.defineProperties(this, {
      _events: {
        enumerable: false,
        value: new EventEmitter(),
      },
      _messages: {
        enumerable: false,
        value: [],
      },
    });
    this._chatReadIntervalMS = options.serverChatUpdateInterval ?? 8000;
    this.isReady = new Promise(
      (async (res: (value: void | PromiseLike<void>) => void) => {
        this.root.info().then((info) => {
          this.server_info = info;
          Object.defineProperty(this, '_startDate', {
            enumerable: false,
            value: new Date(Date.now() - info.TimeSinceStart * 1000),
          });
          this.setupChatInterval();
          //Finished
          res();
          this._events.emit('ready');
        });
      }).bind(this),
    );
  }
  public createECOJSPlugin<NewPlugin extends BasePlugin>(
    pluginClass: NewPlugin,
  ): NewPlugin {
    const plugin = new (pluginClass as any)(this) as NewPlugin;
    const pluginName = this.resolveEcojsPluginName(plugin);
    Reflect.set(this.EcoJSPlugins, pluginName, plugin);
    // TODO: Hook Registrations
    return plugin;
  }

  protected resolveEcojsPluginName(plugin: BasePlugin): string {
    return plugin.Name?.trim() !== ''
      ? plugin.Name
      : (plugin as any).constuctor.name;
  }

  /**
   * Time Utility Function
   */
  public convertDurationToDate(duration: number): Date {
    return new Date(this._startDate.getTime() + duration * 1000);
  }
  /**
   * Time Utility Function
   */
  public convertDateToDuration(date: Date): number {
    return (date.getTime() - this._startDate.getTime()) * 0.001;
  }

  public setupChatInterval() {
    clearInterval(this._chatReadInterval);
    this._chatReadInterval = null as unknown as NodeJS.Timeout;
    if (this._chatReadIntervalMS == 0) return;
    this._chatReadInterval = setInterval(
      this.checkForNewChats.bind(this),
      this._chatReadIntervalMS,
    );
  }

  public async checkForNewChats() {
    if (!this._chatFetched) {
      const tmessages = await this.chat.getChat();
      this._messages.push(...tmessages);
      this._chatFetched = true;
    }
    return this.chat
      .getChat()
      .then((messagesRaw) => {
        const messages = messagesRaw.slice(this._messages.length);
        for (const message of messages) {
          this._events.emit('CHAT_MESSAGE', message);
          this._messages.push(message);
        }
        return true;
      })
      .catch(() => false);
  }
  public on(
    event: 'CHAT_MESSAGE',
    cb: (message: ChatMessage) => void,
  ): EventEmitter;
  public on(
    event: Parameters<EventEmitter['on']>[0],
    cb: Parameters<EventEmitter['on']>[1],
  ): EventEmitter {
    return this._events.on(event, cb);
  }
  public removeListener(
    event: Parameters<EventEmitter['removeListener']>[0],
    cb: Parameters<EventEmitter['removeListener']>[1],
  ): EventEmitter {
    return this._events.removeListener(event, cb);
  }
}
