export interface IProfilingResult {
  Name?: string
  Size: number
  CreatedAt?: string
}

export class ProfilingResult implements IProfilingResult {
  public Name?: string
  public Size: number
  public CreatedAt?: string
  constructor($b: IProfilingResult = {} as IProfilingResult){
    this.Name = $b.Name
    this.Size = $b.Size
    this.CreatedAt = $b.CreatedAt
  }
}
