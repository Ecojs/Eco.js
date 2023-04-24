import { CivicAction, ICivicAction } from './CivicAction';
import { ElectionChoice, IElectionChoice } from './ElectionChoice';
import { ElectionComment, IElectionComment } from './ElectionComment';
import { ElectionResults, IElectionResults } from './ElectionResults';
import { ElectionProcess, IElectionProcess } from './ElectionProcess';
import { ElectedTitle, IElectedTitle } from './ElectedTitle';

export interface IGameServerElection {
  Choices?: IElectionChoice[]
  TotalVotes: number
  TimeEnd: number
  TimeEndAgo: number
  TimeStart: number
  TimeStartAgo: number
  Finished: boolean
  Passed: boolean
  PendingVote: boolean
  Comments?: IElectionComment[]
  Provisions?: ICivicAction[]
  Results: IElectionResults
  ElectionProcess: IElectionProcess
  PositionForWinner: IElectedTitle
  BooleanElection: boolean
  ElectionDescription?: string
  Id: number
  Name?: string
  UserDescription?: string
  State?: string
  Creator?: string
}
export class GameServerElection implements IGameServerElection {
  public Choices?: ElectionChoice[]
  public TotalVotes: number
  public TimeEnd: number
  public TimeEndAgo: number
  public TimeStart: number
  public TimeStartAgo: number
  public Finished: boolean
  public Passed: boolean
  public PendingVote: boolean
  public Comments?: ElectionComment[]
  public Provisions?: CivicAction[]
  public Results: ElectionResults
  public ElectionProcess: ElectionProcess
  public PositionForWinner: ElectedTitle
  public BooleanElection: boolean
  public ElectionDescription?: string
  public Id: number
  public Name?: string
  public UserDescription?: string
  public State?: string
  public Creator?: string
  constructor($b: IGameServerElection = {} as IGameServerElection) {
    this.Choices = $b.Choices ? $b.Choices.map(value => new ElectionChoice(value)) : []
    this.TotalVotes = $b.TotalVotes
    this.TimeEnd = $b.TimeEnd
    this.TimeEndAgo = $b.TimeEndAgo
    this.TimeStart = $b.TimeStart
    this.TimeStartAgo = $b.TimeStartAgo
    this.Finished = $b.Finished
    this.Passed = $b.Passed
    this.PendingVote = $b.PendingVote
    this.Comments = $b.Comments ? $b.Comments.map(value => new ElectionComment(value)) : []
    this.Results = new ElectionResults($b.Results)
    this.ElectionProcess = new ElectionProcess($b.ElectionProcess)
    this.PositionForWinner = new ElectedTitle($b.PositionForWinner)
    this.BooleanElection = $b.BooleanElection
    this.Id = $b.Id
    this.Name = $b.Name
    this.UserDescription = $b.UserDescription
    this.State = $b.State
    this.Creator = $b.Creator
  }
}
