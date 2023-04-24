import { IVector3, Vector3 } from '../../../../../System/Numerics/Vector3';

export interface IEntity {
  Position: Vector3
  EntityType?: string
}

export class Entity implements IEntity {
  public Position: IVector3;
  public EntityType?: string
  constructor($b: IEntity = {} as IEntity){
    this.Position = new Vector3($b.Position)
    this.EntityType = $b.EntityType
  }
}
