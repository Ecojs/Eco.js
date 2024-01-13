import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';

export interface IVector3i {
  x: number;
  y: number;
  z: number;
}
//TODO: Finish Class
export class Vector3i extends ClientObjectBase implements IVector3i {
  public x: number;
  public y: number;
  public z: number;
  constructor(client: ECO, $b: IVector3i = {} as IVector3i) {
    super(client);
    this.x = $b.x;
    this.y = $b.y;
    this.z = $b.z;
  }
}
