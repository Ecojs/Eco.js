export interface IWorldLayer {
  LayerName?: string
  LayerDisplayName?: string
  Summary?: string
  Tooltip?: string
  Category?: string
  DisplayRow: number
}

export class WorldLayer implements IWorldLayer {
  public LayerName?: string
  public LayerDisplayName?: string
  public Summary?: string
  public Tooltip?: string
  public Category?: string
  public DisplayRow: number
  constructor($b: IWorldLayer = {} as IWorldLayer){
    this.LayerName = $b.LayerName
    this.LayerDisplayName = $b.LayerDisplayName
    this.Summary = $b.Summary
    this.Tooltip = $b.Tooltip
    this.Category = $b.Category
    this.DisplayRow = $b.DisplayRow
  }
}
