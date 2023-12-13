import ECO from "../../../../Core/ECO";
import { ClientObjectBase } from "../../../ClientObjectBase";
export interface ILocString {
  readonly NotTranslated?: string;
  readonly Inlineable: boolean;
  readonly Length: boolean;
}
export class LocString extends ClientObjectBase implements ILocString {
  public readonly NotTranslated?: string;
  public readonly Inlineable: boolean;
  public readonly Length: boolean;
  constructor(client: ECO, $b: ILocString = {} as ILocString) {
    super(client);
    this.NotTranslated = $b.NotTranslated;
    this.Inlineable = $b.Inlineable;
    this.Length = $b.Length;
  }
}
