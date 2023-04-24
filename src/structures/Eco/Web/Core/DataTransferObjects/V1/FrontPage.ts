import { IServerInfo, ServerInfo } from '../../../../Shared/Networking/ServerInfo';
import { INamedGraph, NamedGraph } from '../../../../Stats/NamedGraph';

export interface IFrontPage {
  Info: IServerInfo
  readonly Graphs?: INamedGraph[]
}

export class FrontPage implements IFrontPage {
  public Info: ServerInfo;
  public Graphs?: NamedGraph[]
  constructor($b: IFrontPage = {} as IFrontPage){
    this.Info = new ServerInfo($b.Info)
    this.Graphs = $b.Graphs ? $b.Graphs.map(value=> new NamedGraph(value)): []
  }
}
