import ECO from '../../../../../../Core/ECO'
import { ClientObjectBase } from '../../../../../ClientObjectBase'

export interface IVector3 {
  x: number
  y: number
  z: number
}

export class Vector3 extends ClientObjectBase implements IVector3 {
  public x: number
  public y: number
  public z: number
  constructor(client: ECO, $b: IVector3 = {} as IVector3) {
    super(client)
    this.x = $b.x
    this.y = $b.y
    this.z = $b.z
  }
}
