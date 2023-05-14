import ECO from '../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../ClientObjectBase';

export interface IElectionChoice {
  Id: number;
  Name?: string;
  Speech?: string;
}
export class ElectionChoice
  extends ClientObjectBase
  implements IElectionChoice
{
  public Id: number;
  public Name?: string;
  public Speech?: string;
  constructor(client: ECO, $b: IElectionChoice = {} as IElectionChoice) {
    super(client);
    this.Id = $b.Id;
    this.Name = $b.Name;
    this.Speech = $b.Speech;
  }
}
