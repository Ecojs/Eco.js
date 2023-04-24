import { ILocString, LocString } from '../../../../Shared/Localization/LocString';

export interface IElectedTitle {
  Table?: ILocString[]
  OccupantNames?: string[]
  Id: number
  Name?: string
  State?: string
  Creator?: string
}
export class ElectedTitle implements IElectedTitle {
  public Table?: ILocString[]
  public OccupantNames?: string[]
  public Id: number;
  public Name?: string
  public State?: string
  public Creator?: string
  constructor($b: IElectedTitle = {} as IElectedTitle) {
    this.Table = $b.Table ? $b.Table.map(value => new LocString(value)) : []
    this.OccupantNames = $b.OccupantNames ?? []
    this.Id = $b.Id
    this.Name = $b.Name
    this.State = $b.State
    this.Creator = $b.Creator
  }
}
