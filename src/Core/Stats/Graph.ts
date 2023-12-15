import ECO from '../ECO.js';
import { ClientObjectBase } from '../ClientObjectBase.js';
import { IKey, Key } from './Key.js';

export interface IGraph {
  Keys?: IKey[];
  TimeMin: number;
  TimeMax: number;
}
export class Graph extends ClientObjectBase implements IGraph {
  public Keys?: Key[];
  public TimeMin: number;
  public TimeMax: number;
  constructor(client: ECO, $b: IGraph = {} as IGraph) {
    super(client);
    this.Keys = $b.Keys ? $b.Keys.map((val) => new Key(this.client, val)) : [];
    this.TimeMin = $b.TimeMin;
    this.TimeMax = $b.TimeMax;
  }
}
