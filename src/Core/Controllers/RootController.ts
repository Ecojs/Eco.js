import { ServerInfo, IServerInfo } from '../../structures/Eco/Shared/Networking/ServerInfo';
import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';

export class RootController extends ControllerBase {
  constructor(client: ECO) {
    super(client)
  }
  public async info() {
    return this.GET<ServerInfo, IServerInfo>('info', ServerInfo)
  }
  public async rawinfo() {
    return this.GET<IServerInfo, IServerInfo>('info')
  }
}
