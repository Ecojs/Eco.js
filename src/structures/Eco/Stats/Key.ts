import { Unit } from './Unit';

export interface IKey {
  Unit: Unit
  Value?: string
  UnitDisplayName?: string
  DisplayName?: string
}
export class Key implements IKey {
  public Unit: Unit;
  public Value?: string
  public UnitDisplayName?: string
  public DisplayName?: string
  constructor($b: IKey = {} as IKey) {
    this.Unit = $b.Unit;
    this.Value = $b.Value
    this.UnitDisplayName = $b.UnitDisplayName
    this.DisplayName = $b.DisplayName
  }
}
