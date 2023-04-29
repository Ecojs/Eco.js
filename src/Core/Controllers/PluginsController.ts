import {
  IPluginInfo,
  PluginInfo,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/PluginInfo";
import {
  IWebPluginInfo,
  WebPluginInfo,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/WebPluginInfo";
import ECO from "../ECO";
import { ControllerBase } from "./ControllerBase";

export class PluginsController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }

  public async getPluginConfig(name: string) {
    return this.GET<any, any>(`/api/v1/plugins/config/${name}`);
  }
  public async setPluginConfig(name: string, config: any) {
    return this.POST<any, any, any>(`/api/v1/plugins/config/${name}`, config);
  }
  public async getPlugins() {
    return this.GET<PluginInfo[], IPluginInfo[]>(
      `/api/v1/plugins`,
      (client, plugins) =>
        plugins.map((plugin) => new PluginInfo(client, plugin))
    );
  }
  public async getWebPlugins() {
    return this.GET<WebPluginInfo[], IWebPluginInfo[]>(
      `/api/v1/plugins/web`,
      (client, plugins) =>
        plugins.map((plugin) => new WebPluginInfo(client, plugin))
    );
  }
}
