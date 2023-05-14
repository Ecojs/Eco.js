import {
  ServerInfo,
  IServerInfo,
} from '../../structures/Eco/Shared/Networking/ServerInfo';
import {
  FrontPage,
  IFrontPage,
} from '../../structures/Eco/Web/Core/DataTransferObjects/V1/FrontPage';
import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';

export class RootController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async info() {
    return this.GET<ServerInfo, IServerInfo>('info', ServerInfo);
  }
  public async rawinfo() {
    return this.GET<IServerInfo, IServerInfo>('info');
  }
  public async getFrontpage() {
    return this.GET<FrontPage, IFrontPage>(`frontpage`, FrontPage);
  }
  public async getAdmins() {
    return this.GET<string[], string[]>('admins');
  }
  public async getIsAdmin() {
    return this.GET<boolean, boolean>('isadmin');
  }
}
