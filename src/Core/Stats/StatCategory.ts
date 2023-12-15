import ECO from '../ECO.js';
import { ClientObjectBase } from '../ClientObjectBase.js';
import { IStatInfo, StatInfo } from './StatInfo.js';

export interface IStatCategory {
  Name?: string;
  DisplayName?: string;
  ChildrenStats?: IStatInfo[];
  ChildrenCategories?: unknown[]; //TODO: Figure Out Structure
}

export class StatCategory extends ClientObjectBase implements IStatCategory {
  public Name?: string;
  public DisplayName?: string;
  public ChildrenStats?: IStatInfo[];
  public ChildrenCategories?: unknown[];
  constructor(client: ECO, $b: IStatCategory = {} as IStatCategory) {
    super(client);
    this.Name = $b.Name;
    this.DisplayName = $b.DisplayName;
    this.ChildrenCategories = $b.ChildrenCategories;
    this.ChildrenStats = $b.ChildrenStats
      ? $b.ChildrenStats.map((value) => new StatInfo(this.client, value))
      : [];
  }
}
