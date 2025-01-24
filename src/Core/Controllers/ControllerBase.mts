import { ClientObjectBase } from '../ClientObjectBase.mjs';
import ECO from '../ECO.mjs';

export class ControllerBase extends ClientObjectBase {
  constructor(client: ECO) {
    super(client);
  }
  protected async GET<ReturnType = unknown, ReturnDTO = unknown>(
    path: string,
    constructor?:
      | (new (client: ECO, data: ReturnDTO) => ReturnType)
      | ((client: ECO, data: ReturnDTO) => ReturnType),
  ): Promise<ReturnType> {
    return this.client.HttpClient.GET(path, constructor);
  }
  protected async POST<
    ReturnType = unknown,
    ReturnDTO = unknown,
    Body = Record<PropertyKey, any>,
  >(
    path: string,
    body: Body,
    constructor?:
      | (new (client: ECO, data: ReturnDTO) => ReturnType)
      | ((client: ECO, data: ReturnDTO) => ReturnType),
  ): Promise<ReturnType> {
    return this.client.HttpClient.POST(path, body, constructor);
  }
}
