import ECO from '../../../../../../Core/ECO'
import { ClientObjectBase } from '../../../../../ClientObjectBase'

export interface IProfilingResult {
  Name?: string
  Size: number
  CreatedAt?: string
}

export class ProfilingResult extends ClientObjectBase implements IProfilingResult {
  public Name?: string
  public Size: number
  public CreatedAt?: string
  constructor(client: ECO, $b: IProfilingResult = {} as IProfilingResult) {
    super(client)
    this.Name = $b.Name
    this.Size = $b.Size
    this.CreatedAt = $b.CreatedAt
  }
}
