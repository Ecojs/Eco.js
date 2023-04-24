export interface IExportGameModel {
  S3ExportUri?: string
}

export class ExportGameModel implements IExportGameModel {
  public S3ExportUri?: string
  constructor($b: IExportGameModel = {} as IExportGameModel) {
    this.S3ExportUri = $b.S3ExportUri
  }
}
