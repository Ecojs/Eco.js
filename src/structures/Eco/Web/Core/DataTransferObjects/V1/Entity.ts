import ECO from '../../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../../ClientObjectBase';
import { IVector3, Vector3 } from '../../../../../System/Numerics/Vector3';

export interface IEntity {
  Position: IVector3
  EntityType?: string
}

export class Entity extends ClientObjectBase implements IEntity {
  public Position: Vector3;
  public EntityType?: string
  constructor(client: ECO, $b: IEntity = {} as IEntity) {
    super(client)
    this.Position = new Vector3(this.client, $b.Position)
    this.EntityType = $b.EntityType
  }
}
