export interface ILocString {
  readonly NotTranslated?: string;
  readonly Inlineable: boolean;
  readonly Length: boolean;
}
export class LocString implements ILocString {
  public readonly NotTranslated?: string;
  public readonly Inlineable: boolean;
  public readonly Length: boolean;
  constructor($b: ILocString = {} as ILocString) {
    this.NotTranslated = $b.NotTranslated;
    this.Inlineable = $b.Inlineable;
    this.Length = $b.Length;
  }
}
