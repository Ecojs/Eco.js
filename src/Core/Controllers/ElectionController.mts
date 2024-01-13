import { ProposableState } from '../Shared/Items/ProposableState.mjs';
import {
  ElectedTitle,
  IElectedTitle,
} from '../DataTransferObjects/V1/ElectedTitle.mjs';
import {
  ElectionComment,
  IElectionComment,
} from '../DataTransferObjects/V1/ElectionComment.mjs';
import {
  GameServerElection,
  IGameServerElection,
} from '../DataTransferObjects/V1/GameServerElection.mjs';
import {
  IRunoffVote,
  RunoffVote,
} from '../DataTransferObjects/V1/RunoffVote.mjs';
import ECO from '../ECO.mjs';
import { ControllerBase } from './ControllerBase.mjs';

export class ElectionController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  /**
   * Returns all elected titles and their occupants matching the given state (active by default).
   */
  public async getElectedTitles(
    state: ProposableState = ProposableState.Active,
  ) {
    return this.GET<ElectedTitle[], IElectedTitle[]>(
      `/api/v1/elections/titles?state=${state}`,
      (client, titles) =>
        titles.map((title) => new ElectedTitle(client, title)),
    );
  }
  /**
   * Returns the elected title with the given id.
   */
  public async getElectedTitleById(id: number) {
    return this.GET<ElectedTitle, IElectedTitle>(
      `/api/v1/elections/titles/${id}`,
      ElectedTitle,
    );
  }
  /**
   * Returns all elections that are either active or inactive.
   */
  public async getElections(active = true) {
    return this.GET<GameServerElection[], IGameServerElection[]>(
      `/api/v1/elections?returnActive=${active}`,
      (client, elections) =>
        elections.map((election) => new GameServerElection(client, election)),
    );
  }
  /**
   * Returns the election with the given id.
   */
  public async getElectionById(id: number) {
    return this.GET<GameServerElection, IGameServerElection>(
      `/api/v1/elections/${id}`,
      GameServerElection,
    );
  }
  /**
   * Returns a list of votes that were made on the indicated election.
   * If a user is logged in their own votes will be revealed when voting is anonymous.
   */
  public async getVotes(electionID: number | IGameServerElection) {
    return this.GET<RunoffVote[], IRunoffVote[]>(
      `/api/v1/elections/votes?id=${
        (electionID as IGameServerElection)?.Id ?? (electionID as number)
      }`,
      (client, votes) => votes.map((vote) => new RunoffVote(client, vote)),
    );
  }
  /**
   * Places a vote on behalf of the given player.  Can only be called if an election is currently running.
   * @param vote The player's vote.  Must contain a ranked list of all candidates for the current election.
   * @param force Force vote ignoring election process.
   * @returns A failure code if the vote is invalid, the player is not authorized, or the vote cannot be placed for another reason.
   */
  public async vote(vote: IRunoffVote, force = false) {
    return this.POST<void, void, IRunoffVote>(
      `/api/v1/elections/vote?forceVote=${force}`,
      vote,
    );
  }
  /**
   * Forces the currently running election to end now, and for the current election winner to become the leader. Can only be called by an admin or dev.
   * @param election The election Object or ID.
   */
  public async forceEndElection(election: IGameServerElection | number) {
    return this.POST<void, void, void>(
      `/api/v1/elections/forceelectionend?electionId=${
        (election as IGameServerElection)?.Id ?? election
      }`,
      undefined,
    );
  }
  /**
   * Adds a comment to the currently running election, if any.
   * @param election ID of the election.
   * @param comment The comment to be added to the election.
   */
  public async addComment(
    election: IGameServerElection | number,
    comment: IElectionComment,
  ) {
    return this.POST<void, void, IElectionComment>(
      `/api/v1/elections/addcomment?electionId=${
        (election as IGameServerElection)?.Id ?? election
      }`,
      comment,
    );
  }
  /**
   * List comments on the election.
   * @param election Election Object or ID
   */
  public async getComments(election: IGameServerElection | number) {
    return this.GET<ElectionComment[], IElectionComment[]>(
      `/api/v1/elections/listcomments?electionId=${
        (election as IGameServerElection)?.Id ?? election
      }`,
      (client, comments) =>
        comments.map((comment) => new ElectionComment(client, comment)),
    );
  }
}
