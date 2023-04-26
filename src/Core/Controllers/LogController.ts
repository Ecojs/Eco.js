import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';

export class LogController extends ControllerBase {
  constructor(client: ECO) {
    super(client)
  }
  public async list(category?: string) {
    return this.GET<string[], string[]>(`/api/v1/logs/${category}`)
  }
}
