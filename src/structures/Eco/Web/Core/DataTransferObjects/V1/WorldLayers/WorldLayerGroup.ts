import { IWorldLayer, WorldLayer } from './WorldLayer';

export interface IWorldLayerGroup {
  Category?: string
  List?: IWorldLayer[]
}

export class WorldLayerGroup implements IWorldLayerGroup {
  public Category?: string
  public List?: WorldLayer[]
  constructor($b: IWorldLayerGroup = {} as IWorldLayerGroup) {
    this.Category = $b.Category
    this.List = $b.List ? $b.List.map(value => new WorldLayer(value)) : []
  }
}
