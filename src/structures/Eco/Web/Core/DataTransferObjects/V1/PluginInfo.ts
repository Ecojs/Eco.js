import ECO from '../../../../../../Core/ECO'
import { ClientObjectBase } from '../../../../../ClientObjectBase'

export interface IPluginInfo {
  TypeName?: string
  Status?: string
  HasConfig: boolean
}

export class PluginInfo extends ClientObjectBase implements IPluginInfo {
  public TypeName?: string
  public Status?: string
  public HasConfig: boolean
  constructor(client: ECO, $b: IPluginInfo = {} as IPluginInfo) {
    super(client)
    this.TypeName = $b.TypeName
    this.Status = $b.Status
    this.HasConfig = $b.HasConfig
  }
}
