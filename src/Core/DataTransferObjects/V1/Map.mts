import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';
import { IVector3, Vector3 } from './Vector3.mjs';

export interface IMap {
  layerSelected?: string;
  frame: number;
  timeStart: number;
  timeEnd: number;
  playSpeed: number;
  currentTime: number;
  flat: boolean;
  pause: boolean;
  camPos: IVector3;
}

export class Map extends ClientObjectBase implements IMap {
  public layerSelected?: string;
  public frame: number;
  public timeStart: number;
  public timeEnd: number;
  public playSpeed: number;
  public currentTime: number;
  public flat: boolean;
  public pause: boolean;
  public camPos: Vector3;
  constructor(client: ECO, $b: IMap = {} as IMap) {
    super(client);
    this.layerSelected = $b.layerSelected;
    this.frame = $b.frame;
    this.timeStart = $b.timeStart;
    this.timeEnd = $b.timeEnd;
    this.playSpeed = $b.playSpeed;
    this.currentTime = $b.currentTime;
    this.flat = $b.flat;
    this.pause = $b.pause;
    this.camPos = new Vector3(this.client, $b.camPos);
  }
}
