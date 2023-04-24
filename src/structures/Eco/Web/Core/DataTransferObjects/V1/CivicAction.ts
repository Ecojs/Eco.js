import { IMap } from './Map'

export interface ICivicAction {
  ActionOnComplete?: string
  ActionOnCompleteTableHeader?: string
  ActionOnCompleteTable?: unknown[] //TODO: Figure Out Structure
  ActionOnCompleteFullDescription?: string
  DistrictMapBefore: IMap
  DistrictMapAfter: IMap
}
export class CivicAction implements ICivicAction {
  public ActionOnComplete?: string
  public ActionOnCompleteTableHeader?: string
  public ActionOnCompleteTable?: unknown[] //TODO: Figure Out Structure
  public ActionOnCompleteFullDescription?: string
  public DistrictMapBefore: IMap
  public DistrictMapAfter: IMap
  constructor($b: ICivicAction = {} as ICivicAction) {
    this.ActionOnComplete = $b.ActionOnComplete
    this.ActionOnCompleteTableHeader = $b.ActionOnCompleteTableHeader
    this.ActionOnCompleteTable = $b.ActionOnCompleteTable
    this.ActionOnCompleteFullDescription = $b.ActionOnCompleteFullDescription
    this.DistrictMapBefore = $b.DistrictMapBefore
    this.DistrictMapAfter = $b.DistrictMapAfter
  }
}
