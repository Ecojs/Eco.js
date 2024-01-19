import type ECO from '../Core/ECO.mjs';

export abstract class BasePlugin {
  public abstract Name: string;
  protected client!: ECO;
  constructor(client: ECO) {
    this._setClient(client);
  }
  public _setClient(client: ECO) {
    this.client = client;
  }
  protected get http() {
    return this.client.HttpClient;
  }
}
