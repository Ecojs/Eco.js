import { IVector3i, Vector3i } from '../../../../Shared/Math/Vector3i';

export interface IMapStats {
  Size: IVector3i
}

export class MapStats implements IMapStats {
  public Size: Vector3i
  constructor($b: IMapStats = {} as IMapStats){
    this.Size = new Vector3i($b.Size)
  }
}
