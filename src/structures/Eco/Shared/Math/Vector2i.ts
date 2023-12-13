import ECO from "../../../../Core/ECO";
import { ClientObjectBase } from "../../../ClientObjectBase";

export interface IVector2i {
  x: number;
  y: number;
  readonly Length: number;
  readonly Magnitude: number;
  readonly MagnitudeSq: number;
  readonly Area: number;
  readonly NeighborsAdjacent?: unknown[]; //TODO: Figure Out Structure
  readonly NeighborsDiagonal?: unknown[]; //TODO: Figure Out Structure
}
export class Vector2i extends ClientObjectBase implements IVector2i {
  public x: number;
  public y: number;
  public readonly Length: number;
  public readonly Magnitude: number;
  public readonly MagnitudeSq: number;
  public readonly Area: number;
  public readonly NeighborsAdjacent?: unknown[];
  public readonly NeighborsDiagonal?: unknown[];
  constructor(client: ECO, $b: IVector2i = {} as IVector2i) {
    super(client);
    this.x = $b.x;
    this.y = $b.y;
    this.Length = $b.Length;
    this.Magnitude = $b.Magnitude;
    this.MagnitudeSq = $b.MagnitudeSq;
    this.Area = $b.Area;
    this.NeighborsAdjacent = $b.NeighborsAdjacent;
    this.NeighborsDiagonal = $b.NeighborsDiagonal;
  }
}
