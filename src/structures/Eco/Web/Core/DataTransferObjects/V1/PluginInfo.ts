export interface IPluginInfo {
  TypeName?: string
  Status?: string
  HasConfig: boolean
}

export class PluginInfo implements IPluginInfo {
  public TypeName?: string
  public Status?: string
  public HasConfig: boolean
  constructor($b: IPluginInfo = {} as IPluginInfo){
    this.TypeName = $b.TypeName
    this.Status = $b.Status
    this.HasConfig = $b. HasConfig
  }
}
