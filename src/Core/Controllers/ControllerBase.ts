import ECO from '../ECO';

export class ControllerBase {
  protected client!: ECO
  constructor(client: ECO) {
    Object.defineProperty(this, 'client', { value: client, enumerable: false })
  }
  public async GET<T extends ({ new(props: any): T } | undefined)>(path: string, constructor: T): Promise<T> {
    return this.client.HttpClient.GET(path, constructor)
  }
  public async POST<T extends ({ new(props: any): T } | undefined)>(path: string, body: any, constructor?: T): Promise<T> {
    return this.client.HttpClient.POST(path, body, constructor)
  }
}
