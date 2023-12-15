import { ServerInfo, IServerInfo } from '../Shared/Networking/ServerInfo.js';
import { FrontPage, IFrontPage } from '../DataTransferObjects/V1/FrontPage.js';
import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

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
