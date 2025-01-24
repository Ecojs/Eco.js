import ECO from '../ECO.mjs';
import { ControllerBase } from './ControllerBase.mjs';

export class DataExportController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }

  public async species(species: string) {
    return this.GET<string, string>(
      `/api/v1/exporter/species?speciesName=${species}`,
    );
  }

  public async environment(
    category: string,
    units: string = 'PPM',
    column: string = 'Climate',
  ) {
    return this.GET<string, string>(
      `/api/v1/exporter/environment?category=${category}&units=${units}&column=${column}`,
    );
  }

  public async actions(actionName: string) {
    return this.GET<string, string>(
      `/api/v1/exporter/actions?actionName=${actionName}`,
    );
  }

  public async actionList() {
    return this.GET<string, string>(`/api/v1/exporter/actionList`);
  }

  public async speciesList() {
    return this.GET<string, string>(`/api/v1/exporter/speciesList`);
  }

  public async environmentList() {
    return this.GET<string, string>(`/api/v1/exporter/environmentList`);
  }
}
