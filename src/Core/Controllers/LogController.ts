import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

export class LogController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async list(category = '') {
    return this.GET<string[], string[]>(`/api/v1/logs/${category}`);
  }
  public async getLog(log: string) {
    return this.GET<string[], string[]>(`/api/v1/logs/get?filepath=${log}`);
  }
}
