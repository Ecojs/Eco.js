import ECO from '../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../ClientObjectBase';
import { Graph, IGraph } from '../../../../Stats/Graph';
import { IMap, Map } from './Map';

export interface IElectionComment {
  Username?: string;
  Text?: string;
  Graph: IGraph;
  Map: IMap;
  Timestamp: number;
}

export class ElectionComment
  extends ClientObjectBase
  implements IElectionComment
{
  public Username?: string;
  public Text?: string;
  public Graph: Graph;
  public Map: Map;
  public Timestamp: number;
  constructor(client: ECO, $b: IElectionComment = {} as IElectionComment) {
    super(client);
    this.Username = $b.Username;
    this.Text = $b.Text;
    this.Graph = new Graph(this.client, $b.Graph);
    this.Map = new Map(this.client, $b.Map);
    this.Timestamp = $b.Timestamp;
  }
  get timestampDate() {
    return this.client.convertDurationToDate(this.Timestamp);
  }
}
