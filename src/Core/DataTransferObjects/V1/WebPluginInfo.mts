import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';
import { ILocString, LocString } from '../../Shared/Localization/LocString.mjs';

export interface IWebPluginInfo {
  TypeName?: string;
  FontAwesomeIcon?: string;
  PluginIndexUrl?: string;
  MenuTitle: ILocString;
}

export class WebPluginInfo extends ClientObjectBase implements IWebPluginInfo {
  public TypeName?: string;
  public FontAwesomeIcon?: string;
  public PluginIndexUrl?: string;
  public MenuTitle: LocString;
  constructor(client: ECO, $b: IWebPluginInfo = {} as IWebPluginInfo) {
    super(client);
    this.TypeName = $b.TypeName;
    this.FontAwesomeIcon = $b.FontAwesomeIcon;
    this.PluginIndexUrl = $b.PluginIndexUrl;
    this.MenuTitle = new LocString(this.client, $b.MenuTitle);
  }
}
