import {
  IPluginInfo,
  PluginInfo,
} from '../DataTransferObjects/V1/PluginInfo.mjs';
import {
  ISimplePluginConfig,
  SimplePluginConfig,
} from '../DataTransferObjects/V1/SimplePluginConfig.mjs';
import {
  IWebPluginInfo,
  WebPluginInfo,
} from '../DataTransferObjects/V1/WebPluginInfo.mjs';
import ECO from '../ECO.mjs';
import { ControllerBase } from './ControllerBase.mjs';

/**
 * The API controller in charge of the plugins and config.
 */
export class PluginsController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }

  public async getPluginConfig(name: string) {
    return this.GET<SimplePluginConfig, ISimplePluginConfig>(
      `/api/v1/plugins/config/${name}`,
      (client, config) => new SimplePluginConfig(client, config, name),
    );
  }
  public async setPluginConfig(
    name: string,
    config: SimplePluginConfig,
  ): Promise<boolean>;
  public async setPluginConfig(
    name: string,
    config: { [key: string]: any },
  ): Promise<boolean>;
  public async setPluginConfig(name: string, config: any): Promise<boolean> {
    return (
      (await this.POST<any, any, any>(
        `/api/v1/plugins/config/${name}`,
        config instanceof SimplePluginConfig ? config.Config : config,
      )) == 200
    );
  }
  public async getPlugins() {
    return this.GET<PluginInfo[], IPluginInfo[]>(
      `/api/v1/plugins`,
      (client, plugins) =>
        plugins.map((plugin) => new PluginInfo(client, plugin)),
    );
  }
  public async getWebPlugins() {
    return this.GET<WebPluginInfo[], IWebPluginInfo[]>(
      `/api/v1/plugins/web`,
      (client, plugins) =>
        plugins.map((plugin) => new WebPluginInfo(client, plugin)),
    );
  }
}
