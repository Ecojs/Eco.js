import { IUser, User } from '../DataTransferObjects/V1/User.js';
import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

/**
 * The API controller for collecting users by parameters.
 */
export class UsersController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async getUsers(hoursPlayedGte = 0) {
    return this.GET<User[], IUser[]>(
      `/api/v1/users?hoursPlayedGte=${hoursPlayedGte}`,
      (client, data) => data.map((v) => new User(client, v)),
    );
  }
}
