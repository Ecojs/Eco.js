import { ServerInfo, IServerInfo } from '../Shared/Networking/ServerInfo.js';
import { FrontPage, IFrontPage } from '../DataTransferObjects/V1/FrontPage.js';
import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

/**
 * Root Controller for the Eco Game API.
 */
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
  /**
   * Returns the server's configured administrative users.
   */
  public async getAdmins() {
    return this.GET<string[], string[]>('admins');
  }
  /**
   * Return if the user is an admin and authentication is required.
   */
  public async getIsAdmin() {
    return this.GET<boolean, boolean>('isadmin');
  }
}
