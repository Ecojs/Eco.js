import ECO from '../../../ECO.mjs';
import { ClientObjectBase } from '../../../ClientObjectBase.mjs';
import { IWorldLayer, WorldLayer } from './WorldLayer.mjs';

export interface IWorldLayerGroup {
  Category?: string;
  List?: IWorldLayer[];
}

export class WorldLayerGroup
  extends ClientObjectBase
  implements IWorldLayerGroup
{
  public Category?: string;
  public List?: WorldLayer[];
  constructor(client: ECO, $b: IWorldLayerGroup = {} as IWorldLayerGroup) {
    super(client);
    this.Category = $b.Category;
    this.List = $b.List
      ? $b.List.map((value) => new WorldLayer(this.client, value))
      : [];
  }
}
