import { ProposableState } from "../../structures/Eco/Shared/Items/ProposableState";
import {
  DistrictMap,
  IDistrictMap,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/DistrictMap";
import {
  ILaw,
  Law,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/Law";
import ECO from "../ECO";
import { ControllerBase } from "./ControllerBase";
export class LawController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async getLaws(states?: ProposableState[]) {
    return this.GET<Law[], ILaw[]>(
      `/api/v1/laws${
        states != null && states?.length > 0
          ? `/byStates/${states.join("|")}`
          : ""
      }`,
      (client, laws) => laws.map((law) => new Law(client, law))
    );
  }
  public async getLaw(id: number) {
    return this.GET<Law, ILaw>(`/api/v1/laws/${id}`, Law);
  }
  public async getDistrictMap(mapName: string) {
    return this.GET<DistrictMap, IDistrictMap>(
      `/api/v1/districtmap/${mapName}`,
      DistrictMap
    );
  }
}
