import { ClientObjectBase } from "../../structures/ClientObjectBase";
import ECO from "../ECO";

export class ControllerBase extends ClientObjectBase {
  constructor(client: ECO) {
    super(client);
  }
  protected async GET<T, V>(
    path: string,
    constructor?:
      | (new (client: ECO, data: V) => T)
      | ((client: ECO, data: V) => T)
  ): Promise<T> {
    return this.client.HttpClient.GET(path, constructor);
  }
  protected async POST<T, V, B>(
    path: string,
    body: B,
    constructor?:
      | (new (client: ECO, data: V) => T)
      | ((client: ECO, data: V) => T)
  ): Promise<T> {
    return this.client.HttpClient.POST(path, body, constructor);
  }
}
