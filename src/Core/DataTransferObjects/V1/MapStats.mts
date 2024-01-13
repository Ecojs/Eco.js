import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';
import { IVector3i, Vector3i } from '../../Shared/Math/Vector3i.mjs';

export interface IMapStats {
  Size: IVector3i;
}

export class MapStats extends ClientObjectBase implements IMapStats {
  public Size: Vector3i;
  constructor(client: ECO, $b: IMapStats = {} as IMapStats) {
    super(client);
    this.Size = new Vector3i(this.client, $b.Size);
  }
}
