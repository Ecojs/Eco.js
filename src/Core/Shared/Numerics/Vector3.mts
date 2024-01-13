import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';

export interface IVector3 {
  X: number;
  Y: number;
  Z: number;
}
export class Vector3 extends ClientObjectBase implements IVector3 {
  public X: number;
  public Y: number;
  public Z: number;
  constructor(client: ECO, $b: IVector3 = {} as IVector3) {
    super(client);
    this.X = $b.X;
    this.Y = $b.Y;
    this.Z = $b.Z;
  }
}
