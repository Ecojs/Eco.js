import ECO from '../../../../../../Core/ECO'
import { ClientObjectBase } from '../../../../../ClientObjectBase'

export interface ILaw {
  readonly Description?: string
  Id: number
  Name?: string
  UserDescription?: string
  State?: string
  Creator?: string
}

export class Law extends ClientObjectBase implements ILaw {
  public readonly Description?: string
  public Id: number
  public Name?: string
  public UserDescription?: string
  public State?: string
  public Creator?: string
  constructor(client: ECO, $b: ILaw = {} as ILaw) {
    super(client)
    this.Description = $b.Description
    this.Id = $b.Id
    this.Name = $b.Name
    this.UserDescription = $b.UserDescription
    this.State = $b.State
    this.Creator = $b.Creator
  }
}
