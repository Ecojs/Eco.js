import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

export class StatsController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
}
