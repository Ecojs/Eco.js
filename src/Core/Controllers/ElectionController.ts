import { ProposableState } from "../../structures/Eco/Shared/Items/ProposableState";
import {
  ElectedTitle,
  IElectedTitle,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/ElectedTitle";
import {
  ElectionComment,
  IElectionComment,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/ElectionComment";
import {
  GameServerElection,
  IGameServerElection,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/GameServerElection";
import {
  IRunoffVote,
  RunoffVote,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/RunoffVote";
import ECO from "../ECO";
import { ControllerBase } from "./ControllerBase";

export class ElectionController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async getElectedTitles(
    state: ProposableState = ProposableState.Active
  ) {
    return this.GET<ElectedTitle[], IElectedTitle[]>(
      `/api/v1/elections/titles?state=${state}`,
      (client, titles) => titles.map((title) => new ElectedTitle(client, title))
    );
  }
  public async getElectedTitleById(id: number) {
    return this.GET<ElectedTitle, IElectedTitle>(
      `/api/v1/elections/titles/${id}`,
      ElectedTitle
    );
  }
  public async getElections(returnActive = true) {
    return this.GET<GameServerElection[], IGameServerElection[]>(
      `/api/v1/elections?returnActive=${returnActive}`,
      (client, elections) =>
        elections.map((election) => new GameServerElection(client, election))
    );
  }
  public async getElectionById(id: number) {
    return this.GET<GameServerElection, IGameServerElection>(
      `/api/v1/elections/${id}`,
      GameServerElection
    );
  }
  public async getVotes(electionID: number | IGameServerElection) {
    return this.GET<RunoffVote[], IRunoffVote[]>(
      `/api/v1/elections/votes?id=${
        (electionID as IGameServerElection)?.Id ?? (electionID as number)
      }`,
      (client, votes) => votes.map((vote) => new RunoffVote(client, vote))
    );
  }
  public async vote(vote: IRunoffVote, force = false) {
    return this.POST<void, void, IRunoffVote>(
      `/api/v1/elections/vote?forceVote=${force}`,
      vote
    );
  }
  public async endElection(election: IGameServerElection | number) {
    return this.POST<void, void, void>(
      `/api/v1/elections/forceelectionend?electionId=${
        (election as IGameServerElection)?.Id ?? election
      }`,
      undefined
    );
  }
  public async addComment(
    election: IGameServerElection | number,
    comment: IElectionComment
  ) {
    return this.POST<void, void, IElectionComment>(
      `/api/v1/elections/addcomment?electionId=${
        (election as IGameServerElection)?.Id ?? election
      }`,
      comment
    );
  }
  public async getComments(election: IGameServerElection | number) {
    return this.GET<ElectionComment[], IElectionComment[]>(
      `/api/v1/elections/listcomments?electionId=${
        (election as IGameServerElection)?.Id ?? election
      }`,
      (client, comments) =>
        comments.map((comment) => new ElectionComment(client, comment))
    );
  }
}
