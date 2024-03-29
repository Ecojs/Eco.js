import ECO from '../ECO.mjs';
import { ControllerBase } from './ControllerBase.mjs';

export class AdminController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async getServername() {
    return this.GET<string, string>('/api/v1/admin/get/servername');
  }
  public async setServername(name: string) {
    return this.POST<string, string, void>(
      `/api/v1/admin/set/servername?name=${name}`,
      undefined,
    );
  }
  public async getAccess() {
    return this.GET<string, string>('/api/v1/admin/get/access');
  }
  public async setAccess(visibility: 'public'): Promise<string>;
  public async setAccess(visibility: 'hidden'): Promise<string>;
  public async setAccess(
    visibility: 'private',
    password: string,
  ): Promise<string>;
  public async setAccess(
    visibility: 'public' | 'private' | 'hidden',
    password?: string,
  ): Promise<string> {
    let query = `?value=${visibility}`;
    if (visibility == 'private') query += `&password=${password}`;
    return this.POST<string, string, void>(
      `/api/v1/admin/set/access${query}`,
      undefined,
    );
  }
  // public async export() {
  //   return this.POST<AdminReturnModel, IAdminReturnModel>('/api/v1/admin/game/export', undefined, AdminReturnModel);
  // }
}
