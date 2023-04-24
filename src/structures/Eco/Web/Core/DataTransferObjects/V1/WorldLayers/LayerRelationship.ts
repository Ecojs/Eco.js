import { ILayerInput, LayerInput } from './LayerInput'

export interface ILayerRelationship {
  Name?: string
  RelationshipType?: string
  Output?: string
  Inputs?: ILayerInput[]
  HiddenInputs?: unknown[] //TODO: Figure out Structure
  Tooltip?: string
  readonly Guid?: string
}

export class LayerRelationship implements ILayerRelationship {
  public Name?: string
  public RelationshipType?: string
  public Output?: string
  public Inputs?: LayerInput[]
  public HiddenInputs?: unknown[]
  public Tooltip?: string
  public Guid?: string
  constructor($b: ILayerRelationship = {} as ILayerRelationship){
    this.Name = $b.Name
    this.RelationshipType = $b.RelationshipType
    this.Output = $b.Output
    this.Inputs = $b.Inputs ? $b.Inputs.map(value=> new LayerInput(value)):[]
    this.HiddenInputs = $b.HiddenInputs
    this.Tooltip = $b.Tooltip
    this.Guid = $b.Guid
  }
}
