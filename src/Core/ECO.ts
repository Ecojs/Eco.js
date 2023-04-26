import { ServerInfo } from "../structures/Eco/Shared/Networking/ServerInfo";
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
} from "./Controllers/index";
import { HttpClient } from "./HttpClient";
type EcoClientOptions = {
  /**
   * Your API key
   */
  api_key?: string;
  /**
   * Your Eco Server Address + port
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
export default class ECO {
  public serverVirtualPlayerName: string;
  public HttpClient: HttpClient;
  public Admin = new AdminController(this);
  public Chat = new ChatController(this);
  public Command = new CommandController(this);
  public DataExport = new DataExportController(this);
  public Election = new ElectionController(this);
  public Law = new LawController(this);
  public Log = new LogController(this);
  public Map = new MapController(this);
  public Plugins = new PluginsController(this);
  public ProfilingResults = new ProfilingResultsController(this);
  public Root = new RootController(this);
  public Stats = new StatsController(this);
  public Users = new UsersController(this);
  public WorldLayer = new WorldLayerController(this);
  public server_info!: ServerInfo;
  public isReady: Promise<void>;
  constructor(options: EcoClientOptions) {
    this.serverVirtualPlayerName =
      options.serverVirtualPlayerName ?? "[Server]";
    this.HttpClient = new HttpClient(this, {
      base_url: options.base_url,
      api_key: options.api_key,
    });
    this.isReady = new Promise(
      (async (res: (value: void | PromiseLike<void>) => void) => {
        this.Root.info().then((info) => {
          this.server_info = info;

          //Finished
          res();
        });
      }).bind(this)
    );
  }
}
