import ECO from '../ECO.mjs';
import { ClientObjectBase } from '../ClientObjectBase.mjs';
import { Unit } from './Unit.mjs';

export interface IKey {
  Unit: Unit;
  Value?: string;
  UnitDisplayName?: string;
  DisplayName?: string;
}
export class Key extends ClientObjectBase implements IKey {
  public Unit: Unit;
  public Value?: string;
  public UnitDisplayName?: string;
  public DisplayName?: string;
  constructor(client: ECO, $b: IKey = {} as IKey) {
    super(client);
    this.Unit = $b.Unit;
    this.Value = $b.Value;
    this.UnitDisplayName = $b.UnitDisplayName;
    this.DisplayName = $b.DisplayName;
  }
}
