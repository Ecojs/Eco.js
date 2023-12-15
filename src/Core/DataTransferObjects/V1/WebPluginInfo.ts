import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';
import { ILocString, LocString } from '../../Shared/Localization/LocString.js';

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
