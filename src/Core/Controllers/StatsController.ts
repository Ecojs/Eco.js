import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';
import { ClientObjectBase } from '../ClientObjectBase.js';

/**
 * The API controller in charge of anything stats-y.
 */
export class StatsController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
}

export interface IStatReturn {
  Times?: number[];
  Values?: number[];
  Interval: number;
  Unit?: string;
}
export class StatReturn extends ClientObjectBase implements IStatReturn {
  public Times?: number[];
  public Values?: number[];
  public Interval: number;
  public Unit?: string;
  constructor(client: ECO, $b: IStatReturn = {} as IStatReturn) {
    super(client);
    this.Times = $b.Times ?? [];
    this.Values = $b.Values ?? [];
    this.Interval = $b.Interval;
    this.Unit = $b.Unit;
  }
}
