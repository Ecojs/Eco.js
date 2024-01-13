import ECO from '../../../ECO.mjs';
import { ClientObjectBase } from '../../../ClientObjectBase.mjs';

export interface IChoiceResults {
  ChoiceID: number;
  MarkedUpNameString?: string;
  VotesPerRound?: number[];
  readonly Votes: number;
  readonly SimpleResultVotes: number;
}

export class ChoiceResults extends ClientObjectBase implements IChoiceResults {
  public ChoiceID: number;
  public MarkedUpNameString?: string;
  public VotesPerRound?: number[];
  public readonly Votes: number;
  public readonly SimpleResultVotes: number;
  constructor(client: ECO, $b: IChoiceResults = {} as IChoiceResults) {
    super(client);
    this.ChoiceID = $b.ChoiceID;
    this.MarkedUpNameString = $b.MarkedUpNameString;
    this.VotesPerRound = $b.VotesPerRound;
    this.Votes = $b.Votes;
    this.SimpleResultVotes = $b.SimpleResultVotes;
  }
}
