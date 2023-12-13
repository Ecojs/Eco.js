import ECO from "../../../../../../Core/ECO";
import { ClientObjectBase } from "../../../../../ClientObjectBase";

export interface IRunoffVote {
  ElectionID: number;
  Voter?: string;
  RankedVotes?: number[];
}

export class RunoffVote extends ClientObjectBase implements IRunoffVote {
  public ElectionID: number;
  public Voter?: string;
  public RankedVotes?: number[];
  constructor(client: ECO, $b: IRunoffVote = {} as IRunoffVote) {
    super(client);
    this.ElectionID = $b.ElectionID;
    this.Voter = $b.Voter;
    this.RankedVotes = $b.RankedVotes ?? [];
  }
}
