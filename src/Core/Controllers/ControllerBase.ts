import ECO from '../ECO';

type Constructable<T> = { new(data: any): T }

export class ControllerBase {
  constructor(public client: ECO) { }
  public async GET<T extends (Constructable<T> | null)>(ResponseClass: T, path: string): Promise<T> {
    return null as unknown as T
  }
  public async POST<T extends (Constructable<T> | null)>(ResponseClass: T, path: string, body: any): Promise<T> {
    return null as unknown as T
  }
}
