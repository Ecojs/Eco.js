import ECO from '../../../../../../../Core/ECO'
import { ClientObjectBase } from '../../../../../../ClientObjectBase'

export interface IWorldLayer {
  LayerName?: string
  LayerDisplayName?: string
  Summary?: string
  Tooltip?: string
  Category?: string
  DisplayRow: number
}

export class WorldLayer extends ClientObjectBase implements IWorldLayer {
  public LayerName?: string
  public LayerDisplayName?: string
  public Summary?: string
  public Tooltip?: string
  public Category?: string
  public DisplayRow: number
  constructor(client: ECO, $b: IWorldLayer = {} as IWorldLayer) {
    super(client)
    this.LayerName = $b.LayerName
    this.LayerDisplayName = $b.LayerDisplayName
    this.Summary = $b.Summary
    this.Tooltip = $b.Tooltip
    this.Category = $b.Category
    this.DisplayRow = $b.DisplayRow
  }
}
