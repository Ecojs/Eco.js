import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

export class LogController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  /**
   * Retrieves a list of all log files in the requested category subfolder if it exists.
   * @param category Category log subfolder to search.
   */
  public async list(category: string): Promise<string[]>;
  /**
   * Retrieves a list of all log files on the server.
   */
  public async list(): Promise<string[]>;
  public async list(category = ''): Promise<string[]> {
    return this.GET<string[], string[]>(`/api/v1/logs/${category}`);
  }
  /**
   * Streams a log file over HTTP/HTTPS to a client.
   * @param log Filepath of the log file to stream.
   */
  public async getLog(log: string) {
    return this.GET<string[], string[]>(`/api/v1/logs/get?filepath=${log}`);
  }
}
