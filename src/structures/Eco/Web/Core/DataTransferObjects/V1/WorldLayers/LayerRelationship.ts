import ECO from '../../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../../ClientObjectBase';
import { ILayerInput, LayerInput } from './LayerInput';

export interface ILayerRelationship {
  Name?: string;
  RelationshipType?: string;
  Output?: string;
  Inputs?: ILayerInput[];
  HiddenInputs?: unknown[]; //TODO: Figure out Structure
  Tooltip?: string;
  readonly Guid?: string;
}

export class LayerRelationship
  extends ClientObjectBase
  implements ILayerRelationship
{
  public Name?: string;
  public RelationshipType?: string;
  public Output?: string;
  public Inputs?: LayerInput[];
  public HiddenInputs?: unknown[];
  public Tooltip?: string;
  public Guid?: string;
  constructor(client: ECO, $b: ILayerRelationship = {} as ILayerRelationship) {
    super(client);
    this.Name = $b.Name;
    this.RelationshipType = $b.RelationshipType;
    this.Output = $b.Output;
    this.Inputs = $b.Inputs
      ? $b.Inputs.map((value) => new LayerInput(this.client, value))
      : [];
    this.HiddenInputs = $b.HiddenInputs;
    this.Tooltip = $b.Tooltip;
    this.Guid = $b.Guid;
  }
}
