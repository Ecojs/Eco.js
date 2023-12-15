import ECO from '../ECO.js';
import { ClientObjectBase } from '../ClientObjectBase.js';
import { ILocString, LocString } from '../Shared/Localization/LocString.js';
import { Graph, IGraph } from './Graph.js';

export interface INamedGraph {
  Category: ILocString;
  Name: ILocString;
  Graph: IGraph;
}

export class NamedGraph extends ClientObjectBase implements INamedGraph {
  public Category: ILocString;
  public Name: ILocString;
  public Graph: IGraph;
  constructor(client: ECO, $b: INamedGraph = {} as INamedGraph) {
    super(client);
    this.Category = new LocString(this.client, $b.Category);
    this.Name = new LocString(this.client, $b.Name);
    this.Graph = new Graph(this.client, $b.Graph);
  }
}
