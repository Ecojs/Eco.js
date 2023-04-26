import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';

export class AdminController extends ControllerBase {
  constructor(client: ECO) {
    super(client)
  }
  public async getServername() {
    return this.GET<string, string>('/api/v1/admin/get/servername')
  }
  public async getAccess() {
    return this.GET<string, string>('/api/v1/admin/get/access')
  }
}
