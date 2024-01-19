import type ECO from '../Core/ECO.mjs';

export abstract class BasePlugin {
  public abstract Name: string;
  protected client!: ECO<any>;
  constructor(client: ECO<any>) {
    this._setClient(client);
  }
  public _setClient(client: ECO<any>) {
    this.client = client;
  }
  protected get http() {
    return this.client.HttpClient;
  }
}
