import { District, IDistrict } from './District';
export interface IDistrictMap {
  DistrictMetadata?: IDistrict[]
  DistrictMap?: string
}
export class DistrictMap implements IDistrictMap {
  public DistrictMetadata?: District[]
  public DistrictMap?: string
  constructor($b: IDistrictMap = {} as IDistrictMap) {
    this.DistrictMetadata = $b.DistrictMetadata ? $b.DistrictMetadata.map(value => new District(value)) : []
    this.DistrictMap = $b.DistrictMap
  }
}
