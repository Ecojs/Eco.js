export interface IVector3 {
  X: number
  Y: number
  Z: number
}
export class Vector3 implements IVector3 {
  public X: number
  public Y: number
  public Z: number
  constructor($b: IVector3 = {} as IVector3) {
    this.X = $b.X
    this.Y = $b.Y
    this.Z = $b.Z
  }
}
