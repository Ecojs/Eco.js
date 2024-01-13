import { ProposableState } from '../Shared/Items/ProposableState.mjs';
import {
  DistrictMap,
  IDistrictMap,
} from '../DataTransferObjects/V1/DistrictMap.mjs';
import { ILaw, Law } from '../DataTransferObjects/V1/Law.mjs';
import ECO from '../ECO.mjs';
import { ControllerBase } from './ControllerBase.mjs';
export class LawController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  /**
   * Returns all laws currently present in the game.
   */
  public async getLaws(): Promise<Law[]>;
  /**
   * Returns all laws currently present in the game in the specified states, active by default.
   * @param states Game State to filter.
   */
  public async getLaws(states: ProposableState[]): Promise<Law[]>;
  public async getLaws(states?: ProposableState[]): Promise<Law[]> {
    return this.GET<Law[], ILaw[]>(
      `/api/v1/laws${
        states != null && states?.length > 0
          ? `/byStates/${states.join('|')}`
          : ''
      }`,
      (client, laws) => laws.map((law) => new Law(client, law)),
    );
  }
  /**
   * Returns the law with the specified id
   * @param id Law ID
   */
  public async getLaw(id: number) {
    return this.GET<Law, ILaw>(`/api/v1/laws/${id}`, Law);
  }
  public async getDistrictMap(mapName: string) {
    return this.GET<DistrictMap, IDistrictMap>(
      `/api/v1/districtmap/${mapName}`,
      DistrictMap,
    );
  }
}
