import { IKey, Key } from './Key';

export interface IGraph {
  Keys?: IKey[]
  TimeMin: number
  TimeMax: number
}
export class Graph implements IGraph {
  public Keys?: Key[]
  public TimeMin: number
  public TimeMax: number
  constructor($b: IGraph = {} as IGraph) {
    this.Keys = $b.Keys ? $b.Keys.map(val => new Key(val)) : []
    this.TimeMin = $b.TimeMin
    this.TimeMax = $b.TimeMax
  }
}
