import { IVector3, Vector3 } from './Vector3'

export interface IMap {
  layerSelected?: string
  frame: number
  timeStart: number
  timeEnd: number
  playSpeed: number
  currentTime: number
  flat: boolean
  pause: boolean
  camPos: IVector3
}

export class Map implements IMap {
  public layerSelected?: string
  public frame: number
  public timeStart: number
  public timeEnd: number
  public playSpeed: number
  public currentTime: number
  public flat: boolean
  public pause: boolean
  public camPos: Vector3
  constructor($b: IMap = {} as IMap) {
    this.layerSelected = $b.layerSelected
    this.frame = $b.frame
    this.timeStart = $b.timeStart
    this.timeEnd = $b.timeEnd
    this.playSpeed = $b.playSpeed
    this.currentTime = $b.currentTime
    this.flat = $b.flat
    this.pause = $b.pause
    this.camPos = $b.camPos
  }
}
