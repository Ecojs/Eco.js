import ECO from '../../../ECO.mjs';
import { ClientObjectBase } from '../../../ClientObjectBase.mjs';
import { Color, IColor } from '../../../Utils/Color.mjs';

export interface ILayerInput {
  Name?: string;
  Color: IColor;
  DoubleEnded: boolean;
}

export class LayerInput extends ClientObjectBase implements ILayerInput {
  public Name?: string;
  public Color: Color;
  public DoubleEnded: boolean;
  constructor(client: ECO, $b: ILayerInput = {} as ILayerInput) {
    super(client);
    this.Name = $b.Name;
    this.Color = new Color($b.Color);
    this.DoubleEnded = $b.DoubleEnded;
  }
}
