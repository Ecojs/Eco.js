import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';
import { District, IDistrict } from './District.js';
export interface IDistrictMap {
  DistrictMetadata?: IDistrict[];
  DistrictMap?: string;
}
export class DistrictMap extends ClientObjectBase implements IDistrictMap {
  public DistrictMetadata?: District[];
  public DistrictMap?: string;
  constructor(client: ECO, $b: IDistrictMap = {} as IDistrictMap) {
    super(client);
    this.DistrictMetadata = $b.DistrictMetadata
      ? $b.DistrictMetadata.map((value) => new District(this.client, value))
      : [];
    this.DistrictMap = $b.DistrictMap;
  }
}
