import { ILocString, LocString } from '../../../../Shared/Localization/LocString';

export interface IElectionProcess {
  Table?: ILocString[]
  OccupantNames?: string[]
  Id: number
  Name?: string
  UserDescription?: string
  State?: string
  Creator?: string
}

export class ElectionProcess implements IElectionProcess {
  public Table?: ILocString[]
  public OccupantNames?: string[]
  public Id: number;
  public Name?: string
  public UserDescription?: string
  public State?: string
  public Creator?: string
  constructor($b: IElectionProcess = {} as IElectionProcess) {
    this.Table = $b.Table ? $b.Table.map(value=> new LocString(value)) : []
    this.OccupantNames = $b.OccupantNames ?? []
    this.Id = $b.Id
    this.Name = $b.Name
    this.UserDescription = $b.UserDescription
    this.State = $b.State
    this.Creator = $b.Creator
  }
}
