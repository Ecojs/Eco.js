import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';
import {
  ISimplePluginConfigProperty,
  SimplePluginConfigProperty,
} from './SimplePluginConfigProperty.js';

export interface ISimplePluginConfig {
  Config: {
    [key: string]: any;
  };
  ConfigProperties: {
    [key: string]: ISimplePluginConfigProperty;
  };
}

export class SimplePluginConfig
  extends ClientObjectBase
  implements ISimplePluginConfig
{
  name?: string;
  config: Map<string, any>;
  properties: Map<string, SimplePluginConfigProperty>;
  constructor(
    client: ECO,
    $b: ISimplePluginConfig = {} as ISimplePluginConfig,
    name: string
  ) {
    super(client);
    this.name = name;
    this.config = new Map(Object.entries($b.Config));
    this.properties = new Map(
      Object.entries($b.ConfigProperties).map(([key, property]) => [
        key,
        new SimplePluginConfigProperty(this.client, property),
      ])
    );
  }
  /**
   * Sync the current config to the server
   */
  public async postConfig() {
    if (this.name == null)
      throw new Error(
        'SimplePluginConfig.postConfig must have Name defined to execute.'
      );
    return this.client.plugins.setPluginConfig(this.name, this);
  }
  /**
   * Use property `config` instead for modifying or accessing values
   */
  public get Config() {
    return Object.fromEntries(this.config);
  }
  /**
   * Use property `properties` instead for modifying or accessing values
   */
  public get ConfigProperties() {
    return Object.fromEntries(this.properties);
  }
  toJSON() {
    return {
      Config: this.Config,
      ConfigProperties: this.ConfigProperties,
    };
  }
}
