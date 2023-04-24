import { ILocString, LocString } from '../Shared/Localization/LocString';
import { Graph, IGraph } from './Graph';

export interface INamedGraph {
  Category: ILocString
  Name: ILocString
  Graph: IGraph
}

export class NamedGraph implements INamedGraph {
  public Category: ILocString;
  public Name: ILocString;
  public Graph: IGraph;
  constructor($b: INamedGraph = {} as INamedGraph) {
    this.Category = new LocString($b.Category)
    this.Name = new LocString($b.Name)
    this.Graph = new Graph($b.Graph)
  }
}
