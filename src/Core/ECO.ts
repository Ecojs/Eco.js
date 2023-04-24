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

/**
 * API Container
 */
export default class ECO {
  private HttpClient: unknown;
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
}
