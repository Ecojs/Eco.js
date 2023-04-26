import ECO from '../../../../../../../Core/ECO'
import { ClientObjectBase } from '../../../../../../ClientObjectBase'
import { Color, IColor } from '../../../../../Shared/Utils/Color'

export interface ILayerInput {
  Name?: string
  Color: IColor
  DoubleEnded: boolean
}

export class LayerInput extends ClientObjectBase implements ILayerInput {
  public Name?: string
  public Color: Color
  public DoubleEnded: boolean
  constructor(client: ECO, $b: ILayerInput = {} as ILayerInput) {
    super(client)
    this.Name = $b.Name
    this.Color = new Color($b.Color)
    this.DoubleEnded = $b.DoubleEnded
  }
}
