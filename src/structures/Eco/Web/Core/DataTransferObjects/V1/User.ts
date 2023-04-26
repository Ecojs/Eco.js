import ECO from '../../../../../../Core/ECO'
import { ClientObjectBase } from '../../../../../ClientObjectBase'

export interface IUser {
  Name?: string
  SlgId?: string
  SteamId?: string
}

export class User extends ClientObjectBase implements IUser {
  public Name?: string
  public SlgId?: string
  public SteamId?: string
  constructor(client: ECO, $b: IUser = {} as IUser) {
    super(client)
    this.Name = $b.Name
    this.SlgId = $b.SlgId
    this.SteamId = $b.SteamId
  }
}
