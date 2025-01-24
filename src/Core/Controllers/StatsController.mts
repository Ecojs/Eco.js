import ECO from '../ECO.mjs';
import { ControllerBase } from './ControllerBase.mjs';
import { ClientObjectBase } from '../ClientObjectBase.mjs';
import { INamedGraph, NamedGraph } from '../Stats/NamedGraph.mjs';
import { IStatCategory, StatCategory } from '../Stats/StatCategory.mjs';
import { IStatInfo, StatInfo } from '../Stats/StatInfo.mjs';

/**
 * The API controller in charge of anything stats-y.
 */
export class StatsController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  /**
   * Returns the timerange of the simulation, in days.
   */
  public getTimeRange() {
    return this.GET<number[]>('/datasets/timerange');
  }

  /**
   * Returns all dataset keys, formatted as a tree.
   */
  public getTreeList() {
    return this.GET<StatCategory, IStatCategory>(
      '/datasets/treelist',
      StatCategory,
    );
  }
  /**
   * Returns all stat infos that contain data, formatted as a list, where each key is a list of strings.
   */
  public getFlatList() {
    return this.GET<StatInfo[], IStatInfo[]>(
      '/datasets/flatlist',
      (client, stats) => stats.map((stat) => new StatInfo(client, stat)),
    );
  }
  /**
   * Returns 100 data points between `dayStart` and `dayEnd` of the selected data.
   * If there are more than 100 samples, it will be averaged out to contain exactly 100.
   * @param dataset dataset to take the data from.
   * @param [dayStart=0] Day from which on data is returned. Default is 0.
   * @param [dayEnd=-1] Day until which data is returned. Default is now.
   * @returns A list of floats that returns the data. Might be averaged out if there were too many data points.
   */
  public get(dataset: string, dayStart = 0, dayEnd = -1) {
    return this.GET<StatReturn, IStatReturn>(
      `/datasets/get?dataset=${dataset}&dayStart=${dayStart}&dayEnd=${dayEnd}`,
      StatReturn,
    );
  }
  /**
   * Returns a "package" of multiple statistics in the order of their request.
   * @param requestedSets A list of statistics that should be returned.
   * @param [dayStart=0] Day from which on data is returned. Default is 0.
   * @param [dayEnd=-1] Day until which data is returned. Default is now.
   * @returns The statistics to each of the sets, or null if not found, in the order of their request.
   */
  public getList(requestedSets: string[], dayStart = 0, dayEnd = -1) {
    return this.GET<StatReturn[], IStatReturn[]>(
      `/datasets/get?requestedSets=${requestedSets.join(',')}&dayStart=${dayStart}&dayEnd=${dayEnd}`,
      (client, stats) => stats.map((stat) => new StatReturn(client, stat)),
    );
  }
  /**
   * Returns the list of premade graphs to be displayed on the front page.
   */
  public graphs() {
    return this.GET<NamedGraph[], INamedGraph[]>(
      '/datasets/graphs',
      (client, graphs) => graphs.map((graph) => new NamedGraph(client, graph)),
    );
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
