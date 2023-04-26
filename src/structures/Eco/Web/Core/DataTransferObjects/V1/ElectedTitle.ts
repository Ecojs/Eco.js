import ECO from '../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../ClientObjectBase';
import { ILocString, LocString } from '../../../../Shared/Localization/LocString';

export interface IElectedTitle {
  Table?: ILocString[]
  OccupantNames?: string[]
  Id: number
  Name?: string
  State?: string
  Creator?: string
}
export class ElectedTitle extends ClientObjectBase implements IElectedTitle {
  public Table?: ILocString[]
  public OccupantNames?: string[]
  public Id: number;
  public Name?: string
  public State?: string
  public Creator?: string
  constructor(client: ECO, $b: IElectedTitle = {} as IElectedTitle) {
    super(client)
    this.Table = $b.Table ? $b.Table.map(value => new LocString(this.client, value)) : []
    this.OccupantNames = $b.OccupantNames ?? []
    this.Id = $b.Id
    this.Name = $b.Name
    this.State = $b.State
    this.Creator = $b.Creator
  }
}
