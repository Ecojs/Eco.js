import ECO from "../../../../../../Core/ECO";
import { ClientObjectBase } from "../../../../../ClientObjectBase";

export interface IDistrict {
  ID: number;
  Name?: string;
  R: number;
  G: number;
  B: number;
}
export class District extends ClientObjectBase implements IDistrict {
  public ID: number;
  public Name?: string;
  public R: number;
  public G: number;
  public B: number;
  constructor(client: ECO, $b: IDistrict = {} as IDistrict) {
    super(client);
    this.ID = $b.ID;
    this.Name = $b.Name;
    this.R = $b.R;
    this.G = $b.G;
    this.B = $b.B;
  }
}
