import { Graph, IGraph } from '../../../../Stats/Graph'
import { IMap, Map } from './Map'

export interface IElectionComment {
  Username?: string
  Text?: string
  Graph: IGraph
  Map: IMap
  Timestamp: number
}

export class ElectionComment implements IElectionComment {
  public Username?: string
  public Text?: string
  public Graph: Graph
  public Map: Map
  public Timestamp: number
  constructor($b: IElectionComment = {} as IElectionComment) {
    this.Username = $b.Username
    this.Text = $b.Text
    this.Graph = new Graph($b.Graph)
    this.Map = new Map($b.Map)
    this.Timestamp = $b.Timestamp
  }
}
