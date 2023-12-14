import {
  IPluginInfo,
  PluginInfo,
} from '../../structures/Eco/Web/Core/DataTransferObjects/V1/PluginInfo';
import {
  ISimplePluginConfig,
  SimplePluginConfig,
} from '../../structures/Eco/Web/Core/DataTransferObjects/V1/SimplePluginConfig';
import {
  IWebPluginInfo,
  WebPluginInfo,
} from '../../structures/Eco/Web/Core/DataTransferObjects/V1/WebPluginInfo';
import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';

export class PluginsController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }

  public async getPluginConfig(name: string) {
    return this.GET<SimplePluginConfig, ISimplePluginConfig>(
      `/api/v1/plugins/${name}`,
      (client, config) => new SimplePluginConfig(client, config, name)
    );
  }
  public async setPluginConfig(
    name: string,
    config: SimplePluginConfig
  ): Promise<boolean>;
  public async setPluginConfig(
    name: string,
    config: { [key: string]: any }
  ): Promise<boolean>;
  public async setPluginConfig(name: string, config: any): Promise<boolean> {
    return (
      (await this.POST<any, any, any>(
        `/api/v1/plugins/${name}`,
        config instanceof SimplePluginConfig ? config.Config : config
      )) == 200
    );
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
