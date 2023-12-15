import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';

export interface IProfilingResult {
  Name?: string;
  Size: number;
  CreatedAt?: number;
}

export class ProfilingResult
  extends ClientObjectBase
  implements IProfilingResult
{
  public Name?: string;
  public Size: number;
  public CreatedAt?: number;
  constructor(client: ECO, $b: IProfilingResult = {} as IProfilingResult) {
    super(client);
    this.Name = $b.Name;
    this.Size = $b.Size;
    this.CreatedAt = $b.CreatedAt;
  }
  get createdAtDate() {
    return this.client.convertDurationToDate(this.CreatedAt ?? 0);
  }
}
