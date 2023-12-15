import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

export class PerformanceController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async getNetworkReport() {
    return this.GET('/api/v1/performance');
  }
}
