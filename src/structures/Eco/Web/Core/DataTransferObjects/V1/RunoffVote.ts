export interface IRunoffVote {
  ElectionID: number
  Voter?: string
  RankedVotes?: number[]
}

export class RunoffVote implements IRunoffVote {
  public ElectionID: number
  public Voter?: string
  public RankedVotes?: number[]
  constructor($b: IRunoffVote = {} as IRunoffVote){
    this.ElectionID = $b.ElectionID
    this.Voter = $b.Voter
    this.RankedVotes = $b.RankedVotes ?? []
  }
}
