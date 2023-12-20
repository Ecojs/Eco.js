import { ControllerBase } from './ControllerBase.js';
import ECO from '../ECO.js';
import { IMapStats, MapStats } from '../DataTransferObjects/V1/MapStats.js';
import { Entity, IEntity } from '../DataTransferObjects/V1/Entity.js';
import { IVector3i, Vector3i } from '../Shared/Math/Vector3i.js';
import { IVector2i } from '../Shared/Math/Vector2i.js';

type MapJson = {
  WaterLevel: number;
  DistrictSuffix: string;
  WorldTime: number;
  LayerNames: string[];
  Plots: {
    [key: string]: IVector2i[];
  };
};

export class MapController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async getMapStats() {
    return this.GET<MapStats, IMapStats>('/api/v1/map/mapstats', MapStats);
  }
  public async getEntityTypes() {
    return this.GET<string[], string[]>('/api/v1/map/entitytypes');
  }
  /**
   * Endpoint not properly set up. Only fetches Players currently
   */
  public async getEntities(entityTypes = ['Player']) {
    return this.GET<Entity[], IEntity[]>(
      `/api/v1/map/entities?entityTypes?=${entityTypes}`,
      (c: ECO, d: IEntity[]) => d.map((v) => new Entity(c, v)),
    );
  }
  public async getWorldDimension() {
    return this.GET<Vector3i, IVector3i>(`/api/v1/map/dimension`, Vector3i);
  }
  public async getLayerList() {
    return this.GET<string[], string[]>(`/api/v1/map/layerList`);
  }
  public async getWebMapData() {
    return this.GET<MapJson, MapJson>(`/api/v1/map/map.json`);
  }
  public async getWaterLevel() {
    return this.GET<number, number>('/api/v1/map/waterLevel');
  }
  public async getProperty() {
    return this.GET<unknown, unknown>('/api/v1/map/property');
  }
}
