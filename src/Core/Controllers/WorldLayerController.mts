import {
  IWorldLayerGroup,
  WorldLayerGroup,
} from '../DataTransferObjects/V1/WorldLayers/WorldLayerGroup.mjs';
import ECO from '../ECO.mjs';
import {
  ILayerRelationship,
  IWorldLayer,
  LayerRelationship,
  WorldLayer,
} from '../Shared/index.mjs';
import { ControllerBase } from './ControllerBase.mjs';

export class WorldLayerController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }

  /**
   * Enumerates every world layer in the simulation.
   */
  public listLayers() {
    return this.GET<WorldLayerGroup[], IWorldLayerGroup[]>(
      '/api/v1/worldlayers/layers',
      (client, layers) =>
        layers.map((layer) => new WorldLayerGroup(client, layer)),
    );
  }

  /**
   * Enumerates the layers that should be displayed when the user is focused on a particular layer and world area.
   * @param focusLayer Name of the layer we're querying.
   * @param [minX=-1] The least x boundary of the viewed area, in world coordinates.     Should not be wrapped.
   * @param [minY=-1] The least y boundary of the viewed area, in world coordinates.     Should not be wrapped.
   * @param [maxX=-1] The greatest x boundary of the viewed area, in world coordinates.  Should not be wrapped.
   * @param [maxY=-1] The greatest y boundary of the viewed area, in world coordinates.  Should not be wrapped.
   * @returns An array of structures describing the layers that should be displayed.
   */
  public listRelevantLayers(
    focusLayer: string,
    minX = -1,
    minY = -1,
    maxX = -1,
    maxY = -1,
  ) {
    return this.GET<WorldLayer[], IWorldLayer[]>(
      `/api/v1/worldlayers/layers/${focusLayer}?minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`,
      (client, data) => data.map((layer) => new WorldLayer(client, layer)),
    );
  }
  /**
   * Describes the area selected with a string.
   * @param [minX=-1] The least x boundary of the viewed area, in world coordinates.     Should not be wrapped.
   * @param [minY=-1] The least y boundary of the viewed area, in world coordinates.     Should not be wrapped.
   * @param [maxX=-1] The greatest x boundary of the viewed area, in world coordinates.  Should not be wrapped.
   * @param [maxY=-1] The greatest y boundary of the viewed area, in world coordinates.  Should not be wrapped.
   * @returns A string describing the requested area.
   */
  public areaDescription(minX = -1, minY = -1, maxX = -1, maxY = -1) {
    return this.GET<string>(
      `/api/v1/worldlayers/relationships/areadescription?minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`,
    );
  }
  /**
   * Describes the area selected with a string.
   * @param focusLayer The name of the focused layer.
   * @param [minX=-1] The least x boundary of the viewed area, in world coordinates.     Should not be wrapped.
   * @param [minY=-1] The least y boundary of the viewed area, in world coordinates.     Should not be wrapped.
   * @param [maxX=-1] The greatest x boundary of the viewed area, in world coordinates.  Should not be wrapped.
   * @param [maxY=-1] The greatest y boundary of the viewed area, in world coordinates.  Should not be wrapped.
   * @returns  An array of structures describing the layer relationships that should be displayed.
   */
  public listRelevantRelationships(
    focusLayer: string,
    minX = -1,
    minY = -1,
    maxX = -1,
    maxY = -1,
  ) {
    return this.GET<LayerRelationship[], ILayerRelationship[]>(
      `/api/v1/worldlayers/relationships/${focusLayer}?minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`,
      (client, data) =>
        data.map((layer) => new LayerRelationship(client, layer)),
    );
  }
}
