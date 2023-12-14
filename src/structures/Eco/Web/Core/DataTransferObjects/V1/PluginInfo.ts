import ECO from '../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../ClientObjectBase';

export interface IPluginInfo {
  TypeName?: string;
  Status?: string;
  HasConfig: boolean;
}

export class PluginInfo extends ClientObjectBase implements IPluginInfo {
  public TypeName?: string;
  public Status?: string;
  public HasConfig: boolean;
  constructor(client: ECO, $b: IPluginInfo = {} as IPluginInfo) {
    super(client);
    this.TypeName = $b.TypeName;
    this.Status = $b.Status;
    this.HasConfig = $b.HasConfig;
  }
  public async getConfig() {
    if (this.HasConfig == false)
      throw new Error(`${this.TypeName} does not have a Config.`);
    if (this.TypeName == null)
      throw new Error('TypeName cannot be null to fetch the config.');
    return this.client.plugins.getPluginConfig(this.TypeName as string);
  }
}
