import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

/**
 * The API controller in charge of the plugins and config.
 */
export class PerformanceController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async getNetworkReport() {
    return this.GET('/api/v1/performance');
  }
}
