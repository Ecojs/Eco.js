import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';

export class RootController extends ControllerBase {
  constructor(client: ECO) {
    super(client)
  }
}
