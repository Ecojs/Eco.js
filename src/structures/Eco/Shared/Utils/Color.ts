export interface IColor {
  R: number
  G: number
  B: number
  A: number
  readonly UIntUnit2y: number
  readonly UIntUnity: number
  readonly UInt: number
  readonly HexRGBA?: string
}
export class Color implements IColor {
  public R: number
  public G: number
  public B: number
  public A: number
  public readonly UIntUnit2y: number
  public readonly UIntUnity: number
  public readonly UInt: number
  public readonly HexRGBA?: string
  constructor($b: IColor = {} as IColor) {
    this.R = $b.R
    this.G = $b.G
    this.B = $b.B
    this.A = $b.A
    this.UIntUnit2y = $b.UIntUnit2y
    this.UIntUnity = $b.UIntUnity
    this.UInt = $b.UInt
    this.HexRGBA = $b.HexRGBA
  }
}
