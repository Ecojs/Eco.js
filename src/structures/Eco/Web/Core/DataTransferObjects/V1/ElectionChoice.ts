export interface IElectionChoice {
  Id: number
  Name?: string
  Speech?: string
}
export class ElectionChoice implements IElectionChoice {
  public Id: number
  public Name?: string
  public Speech?: string
  constructor($b: IElectionChoice = {} as IElectionChoice) {
    this.Id = $b.Id
    this.Name = $b.Name
    this.Speech = $b.Speech
  }
}
