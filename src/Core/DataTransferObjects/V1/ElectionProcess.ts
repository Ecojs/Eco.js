import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';
import { ILocString, LocString } from '../../Shared/Localization/LocString.js';

export interface IElectionProcess {
  Table?: ILocString[];
  OccupantNames?: string[];
  Id: number;
  Name?: string;
  UserDescription?: string;
  State?: string;
  Creator?: string;
}

export class ElectionProcess
  extends ClientObjectBase
  implements IElectionProcess
{
  public Table?: ILocString[];
  public OccupantNames?: string[];
  public Id: number;
  public Name?: string;
  public UserDescription?: string;
  public State?: string;
  public Creator?: string;
  constructor(client: ECO, $b: IElectionProcess = {} as IElectionProcess) {
    super(client);
    this.Table = $b.Table
      ? $b.Table.map((value) => new LocString(this.client, value))
      : [];
    this.OccupantNames = $b.OccupantNames ?? [];
    this.Id = $b.Id;
    this.Name = $b.Name;
    this.UserDescription = $b.UserDescription;
    this.State = $b.State;
    this.Creator = $b.Creator;
  }
}
