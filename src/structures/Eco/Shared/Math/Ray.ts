import { Direction } from './Direction';
import { IVector3i, Vector3i } from './Vector3i';

export interface IRay {
  Pos: IVector3i
  Dir: Direction
  FirstPos: IVector3i
  FirstRay: unknown //TODO: Figure Out Structure
}
export class Ray implements IRay {
  public Pos: Vector3i
  Dir: Direction
  FirstPos: Vector3i;
  FirstRay: unknown;

  constructor($b: IRay = {} as IRay) {
    this.Pos = $b.Pos
    this.Dir = $b.Dir
    this.FirstPos = new Vector3i($b.FirstPos);
    this.FirstRay = $b.FirstRay
  }
}
