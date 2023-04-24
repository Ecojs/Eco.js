import { IStatInfo, StatInfo } from './StatInfo'

export interface IStatCategory {
  Name?: string
  DisplayName?: string
  ChildrenStats?: IStatInfo[]
  ChildrenCategories?: unknown[] //TODO: Figure Out Structure
}

export class StatCategory implements IStatCategory {
  public Name?: string
  public DisplayName?: string
  public ChildrenStats?: IStatInfo[]
  public ChildrenCategories?: unknown[]
  constructor($b: IStatCategory = {} as IStatCategory) {
    this.Name = $b.Name
    this.DisplayName = $b.DisplayName
    this.ChildrenCategories = $b.ChildrenCategories
    this.ChildrenStats = $b.ChildrenStats ? $b.ChildrenStats.map(value => new StatInfo(value)) : []
  }
}
