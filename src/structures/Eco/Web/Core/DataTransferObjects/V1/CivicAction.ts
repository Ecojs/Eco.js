import ECO from '../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../ClientObjectBase';
import { IMap } from './Map';

export interface ICivicAction {
  ActionOnComplete?: string;
  ActionOnCompleteTableHeader?: string;
  ActionOnCompleteTable?: unknown[]; //TODO: Figure Out Structure
  ActionOnCompleteFullDescription?: string;
  DistrictMapBefore: IMap;
  DistrictMapAfter: IMap;
}
export class CivicAction extends ClientObjectBase implements ICivicAction {
  public ActionOnComplete?: string;
  public ActionOnCompleteTableHeader?: string;
  public ActionOnCompleteTable?: unknown[]; //TODO: Figure Out Structure
  public ActionOnCompleteFullDescription?: string;
  public DistrictMapBefore: IMap;
  public DistrictMapAfter: IMap;
  constructor(client: ECO, $b: ICivicAction = {} as ICivicAction) {
    super(client);
    this.ActionOnComplete = $b.ActionOnComplete;
    this.ActionOnCompleteTableHeader = $b.ActionOnCompleteTableHeader;
    this.ActionOnCompleteTable = $b.ActionOnCompleteTable;
    this.ActionOnCompleteFullDescription = $b.ActionOnCompleteFullDescription;
    this.DistrictMapBefore = $b.DistrictMapBefore;
    this.DistrictMapAfter = $b.DistrictMapAfter;
  }
}
