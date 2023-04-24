export interface IDistrict {
  ID: number
  Name?: string
  R: number
  G: number
  B: number
}
export class District implements IDistrict {
  public ID: number
  public Name?: string
  public R: number
  public G: number
  public B: number
  constructor($b: IDistrict = {} as IDistrict) {
    this.ID = $b.ID
    this.Name = $b.Name
    this.R = $b.R
    this.G = $b.G
    this.B = $b.B
  }
}
