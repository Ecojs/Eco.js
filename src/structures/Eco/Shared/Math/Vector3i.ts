export interface IVector3i {
  x: number;
  y: number;
  z: number;
}
//TODO: Finish Class
export class Vector3i implements IVector3i {
  public x: number;
  public y: number;
  public z: number;
  constructor($b: IVector3i = {} as IVector3i) {
    this.x = $b.x;
    this.y = $b.y;
    this.z = $b.z;
  }
}
