import { StatType } from './StatType'

export interface IStatInfo {
  Name?: string
  DisplayName?: string
  Unit?: string
  UnitDisplayName?: string
  StatType: StatType
  ShortName?: string
  Description?: string
  Tags?: string[]
  ValueKey?: string
  SystemType?: string
  HasValueKey: boolean
  readonly IsCustom: boolean
  readonly IsAction: boolean
  readonly IsAggregatable: boolean
  readonly TimeKey?: string
}
export class StatInfo implements IStatInfo {
  public Name?: string
  public DisplayName?: string
  public Unit?: string
  public UnitDisplayName?: string
  public StatType: StatType
  public ShortName?: string
  public Description?: string
  public Tags?: string[]
  public ValueKey?: string
  public SystemType?: string
  public HasValueKey: boolean
  public readonly IsCustom: boolean
  public readonly IsAction: boolean
  public readonly IsAggregatable: boolean
  public readonly TimeKey?: string
  constructor($b: IStatInfo = {} as IStatInfo) {
    this.Name = $b.Name
    this.DisplayName = $b.DisplayName
    this.Unit = $b.Unit
    this.UnitDisplayName = $b.UnitDisplayName
    this.StatType = $b.StatType
    this.ShortName = $b.ShortName
    this.Description = $b.Description
    this.Tags = $b.Tags ?? []
    this.ValueKey = $b.ValueKey
    this.SystemType = $b.SystemType
    this.HasValueKey = $b.HasValueKey
    this.IsCustom = $b.IsCustom
    this.IsAction = $b.IsAction
    this.IsAggregatable = $b.IsAggregatable
    this.TimeKey = $b.TimeKey
  }
}
