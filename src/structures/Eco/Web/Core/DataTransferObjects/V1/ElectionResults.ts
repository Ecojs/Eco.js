import ECO from '../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../ClientObjectBase';
import {
  ChoiceResults,
  IChoiceResults,
} from '../../../../Gameplay/Civics/Elections/ChoiceResults';

export interface IElectionResults {
  ChoiceRanks?: IChoiceResults[];
  TotalVotesForWinner: number;
  Winners?: string[];
  Results?: string;
  Finished: boolean;
}

export class ElectionResults
  extends ClientObjectBase
  implements IElectionResults
{
  public ChoiceRanks?: ChoiceResults[];
  public TotalVotesForWinner: number;
  public Winners?: string[];
  public Results?: string;
  public Finished: boolean;
  constructor(client: ECO, $b: IElectionResults = {} as IElectionResults) {
    super(client);
    this.ChoiceRanks = $b.ChoiceRanks
      ? $b.ChoiceRanks.map((value) => new ChoiceResults(this.client, value))
      : [];
    this.TotalVotesForWinner = $b.TotalVotesForWinner;
    this.Winners = $b.Winners ?? [];
    this.Results = $b.Results;
    this.Finished = $b.Finished;
  }
}
