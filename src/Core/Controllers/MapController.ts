import { ControllerBase } from './ControllerBase';
import ECO from '../ECO';
import { IMapStats, MapStats } from '../../structures/Eco/Web/Core/DataTransferObjects/V1/MapStats';
import { Entity, IEntity } from '../../structures/Eco/Web/Core/DataTransferObjects/V1/Entity';

export class MapController extends ControllerBase {
  constructor(client: ECO) {
    super(client)
  }
  public async getMapStats() {
    return this.GET<MapStats, IMapStats>('/api/v1/map/mapstats', MapStats)
  }
  public async getEntityTypes() {
    return this.GET<string[], string[]>('/api/v1/map/entitytypes')
  }
  public async getEntities() {
    return this.GET<Entity[], IEntity[]>('/api/v1/map/entities', (c: ECO, d: IEntity[]) => d.map(v => new Entity(c, v)))
  }
  public async getWaterLevel() {
    return this.GET<number, number>('/api/v1/map/waterLevel')
  }
}
