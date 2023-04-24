export interface IStatReturn {
  Times?: number[]
  Values?: number[]
  Interval: number
  Unit?: string
}

export class StatReturn implements IStatReturn {
  public Times?: number[]
  public Values?: number[]
  public Interval: number
  public Unit?: string
  constructor($b: IStatReturn = {} as IStatReturn) {
    this.Times = $b.Times ?? []
    this.Values = $b.Values ?? []
    this.Interval = $b.Interval
    this.Unit = $b.Unit
  }
}
