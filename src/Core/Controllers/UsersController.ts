import { IUser, User } from '../../structures/Eco/Web/Core/DataTransferObjects/V1/User';
import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';

export class UsersController extends ControllerBase {
  constructor(client: ECO) {
    super(client)
  }
  public async getUsers(hoursPlayedGte: number = 0) {
    return this.GET<User[], IUser[]>(`/api/v1/users?hoursPlayedGte=${hoursPlayedGte}`, (client, data) => data.map(v => new User(client, v)))
  }
}
