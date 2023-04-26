import ECO from '../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../ClientObjectBase';
import { IServerInfo, ServerInfo } from '../../../../Shared/Networking/ServerInfo';
import { INamedGraph, NamedGraph } from '../../../../Stats/NamedGraph';

export interface IFrontPage {
  Info: IServerInfo
  readonly Graphs?: INamedGraph[]
}

export class FrontPage extends ClientObjectBase implements IFrontPage {
  public Info: ServerInfo;
  public Graphs?: NamedGraph[]
  constructor(client: ECO, $b: IFrontPage = {} as IFrontPage) {
    super(client)
    this.Info = new ServerInfo(this.client, $b.Info)
    this.Graphs = $b.Graphs ? $b.Graphs.map(value => new NamedGraph(this.client, value)) : []
  }
}
