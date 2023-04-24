import { AdminController } from './Controllers/AdminController';
import { ChatController } from './Controllers/ChatController';
import { CommandController } from './Controllers/CommandController';
import { DataExportController } from './Controllers/DataExportController'
import { ElectionController } from './Controllers/ElectionController';
import { LawController } from './Controllers/LawController';
import { LogController } from './Controllers/LogController';
import { MapController } from './Controllers/MapController'
import { PluginsController } from './Controllers/PluginsController';
import { ProfilingResultsController } from './Controllers/ProfilingResultsController';
import { RootController } from './Controllers/RootController';
import { StatsController } from './Controllers/StatsController';
import { UsersController } from './Controllers/UsersController';
import { WorldLayerController } from './Controllers/WorldLayerController';

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
