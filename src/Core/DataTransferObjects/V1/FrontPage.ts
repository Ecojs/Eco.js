import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';
import { IServerInfo, ServerInfo } from '../../Shared/Networking/ServerInfo.js';
import { INamedGraph, NamedGraph } from '../../Stats/NamedGraph.js';

export interface IFrontPage {
  Info: IServerInfo;
  readonly Graphs?: INamedGraph[];
}

export class FrontPage extends ClientObjectBase implements IFrontPage {
  public Info: ServerInfo;
  public Graphs?: NamedGraph[];
  constructor(client: ECO, $b: IFrontPage = {} as IFrontPage) {
    super(client);
    this.Info = new ServerInfo(this.client, $b.Info);
    this.Graphs = $b.Graphs
      ? $b.Graphs.map((value) => new NamedGraph(this.client, value))
      : [];
  }
}
