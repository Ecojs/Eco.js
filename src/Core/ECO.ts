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
  WorldLayerController
} from './Controllers/';
import { HttpClient } from './HttpClient';
type EcoClientOptions = {
  /**
   * Your API key
   */
  api_key?: string
  /**
   * Your Eco Server Address + port
   * @example 'http://127.0.0.1:3001'
   */
  base_url?: string
}
/**
 * API Container
 */
export default class ECO {
  public HttpClient: HttpClient;
  public controllers = {
    Admin: new AdminController(this),
    Chat: new ChatController(this),
    Command: new CommandController(this),
    DataExport: new DataExportController(this),
    Election: new ElectionController(this),
    Law: new LawController(this),
    Log: new LogController(this),
    Map: new MapController(this),
    Plugins: new PluginsController(this),
    ProfilingResults: new ProfilingResultsController(this),
    Root: new RootController(this),
    Stats: new StatsController(this),
    Users: new UsersController(this),
    WorldLayer: new WorldLayerController(this)
  }
  constructor(options: EcoClientOptions){
    this.HttpClient = new HttpClient({
      base_url: options.base_url,
      api_key: options.api_key
    })
  }
}
