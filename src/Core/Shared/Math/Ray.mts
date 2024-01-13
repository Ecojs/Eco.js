import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';
import { Direction } from './Direction.mjs';
import { IVector3i, Vector3i } from './Vector3i.mjs';

export interface IRay {
  Pos: IVector3i;
  Dir: Direction;
  FirstPos: IVector3i;
  FirstRay: unknown; //TODO: Figure Out Structure
}
export class Ray extends ClientObjectBase implements IRay {
  public Pos: Vector3i;
  Dir: Direction;
  FirstPos: Vector3i;
  FirstRay: unknown;

  constructor(client: ECO, $b: IRay = {} as IRay) {
    super(client);
    this.Pos = new Vector3i(this.client, $b.Pos);
    this.Dir = $b.Dir;
    this.FirstPos = new Vector3i(this.client, $b.FirstPos);
    this.FirstRay = $b.FirstRay;
  }
}
