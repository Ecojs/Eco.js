import { ControllerBase } from './ControllerBase.mjs';
import ECO from '../ECO.mjs';
import { IMapStats, MapStats } from '../DataTransferObjects/V1/MapStats.mjs';
import { Entity, IEntity } from '../DataTransferObjects/V1/Entity.mjs';
import { IVector3i, Vector3i } from '../Shared/Math/Vector3i.mjs';
import { IVector2i } from '../Shared/Math/Vector2i.mjs';

type MapJson = {
  WaterLevel: number;
  DistrictSuffix: string;
  WorldTime: number;
  LayerNames: string[];
  Plots: {
    [key: string]: IVector2i[];
  };
};

/**
 * The API controller in charge of the map and entities found on it.
 */
export class MapController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async getMapStats() {
    return this.GET<MapStats, IMapStats>('/api/v1/map/mapstats', MapStats);
  }
  /**
   * Allows access to all species currently available in the simulation.
   */
  public async getEntityTypes() {
    return this.GET<string[], string[]>('/api/v1/map/entitytypes');
  }
  /**
   * Allows access to all entities currently available in the simulation.
   * @param entityTypes A list of user type names that will be used to filter the response.
   * @param states A list of Animal states that will be used to filter the response.
   * @returns A list of the positions of all organisms.
   * @deprecated Currently this endpoint is not configured properly.
   */
  public async getEntities(entityTypes = ['Player'], states: string[] = []) {
    return this.GET<Entity[], IEntity[]>(
      `/api/v1/map/entities?entityTypes=${entityTypes}&states=${states}`,
      (c: ECO, d: IEntity[]) => d.map((v) => new Entity(c, v)),
    );
  }
  /**
   * Returns the dimension of the world, in blocks.
   * @returns {Vector3i} The world size as vector3.
   */
  public async getWorldDimension() {
    return this.GET<Vector3i, IVector3i>(`/api/v1/map/dimension`, Vector3i);
  }
  /**
   * List Layer Names.
   * @returns A list of all layers.
   */
  public async getLayerList() {
    return this.GET<string[], string[]>(`/api/v1/map/layerList`);
  }
  /**
   * One request to get all required web map data.
   * @returns layer names, property list, water level, world time and district maps.
   */
  public async getWebMapData() {
    return this.GET<MapJson, MapJson>(`/api/v1/map/map.json`);
  }
  /**
   * Get water height
   * @returns Water Level.
   */
  public async getWaterLevel() {
    return this.GET<number, number>('/api/v1/map/waterLevel');
  }
  public async getProperty() {
    return this.GET<unknown, unknown>('/api/v1/map/property');
  }
}
