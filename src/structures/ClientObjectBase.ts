import ECO from '../Core/ECO';

export class ClientObjectBase {
  protected client!: ECO
  constructor(client: ECO) {
    Object.defineProperty(this, 'client', { value: client, enumerable: false })
  }
}
