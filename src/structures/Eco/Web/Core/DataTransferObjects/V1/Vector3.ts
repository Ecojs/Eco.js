export interface IVector3 {
  x: number
  y: number
  z: number
}

export class Vector3 implements IVector3 {
  public x: number
  public y: number
  public z: number
  constructor($b: IVector3 = {} as IVector3) {
    this.x = $b.x
    this.y = $b.y
    this.z = $b.z
  }
}
