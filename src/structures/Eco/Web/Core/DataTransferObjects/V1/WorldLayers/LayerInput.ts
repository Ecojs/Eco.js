import { Color, IColor } from '../../../../../Shared/Utils/Color'

export interface ILayerInput {
  Name?: string
  Color: IColor
  DoubleEnded: boolean
}

export class LayerInput implements ILayerInput {
  public Name?: string
  public Color: Color
  public DoubleEnded: boolean
  constructor($b: ILayerInput = {} as ILayerInput){
    this.Name = $b.Name
    this.Color = new Color($b.Color)
    this.DoubleEnded = $b.DoubleEnded
  }
}
