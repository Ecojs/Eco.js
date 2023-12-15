import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';

export interface ISimplePluginConfigProperty {
  $type: string;
  Name: string;
  DisplayName: string;
  Description: string;
  Category: string;
  Type: string;
  Kind: string;
}

export class SimplePluginConfigProperty
  extends ClientObjectBase
  implements ISimplePluginConfigProperty
{
  $type: string;
  Name: string;
  DisplayName: string;
  Description: string;
  Category: string;
  Type: string;
  Kind: string;
  constructor(
    client: ECO,
    $b: ISimplePluginConfigProperty = {} as ISimplePluginConfigProperty
  ) {
    super(client);
    this.$type = $b.$type;
    this.Name = $b.Name;
    this.DisplayName = $b.DisplayName;
    this.Description = $b.Description;
    this.Category = $b.Category;
    this.Type = $b.Type;
    this.Kind = $b.Kind;
  }
}
