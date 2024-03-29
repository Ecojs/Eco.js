import ECO from '../ECO.mjs';
import { ClientObjectBase } from '../ClientObjectBase.mjs';

export interface IExportGameModel {
  S3ExportUri?: string;
}

export class ExportGameModel
  extends ClientObjectBase
  implements IExportGameModel
{
  public S3ExportUri?: string;
  constructor(client: ECO, $b: IExportGameModel = {} as IExportGameModel) {
    super(client);
    this.S3ExportUri = $b.S3ExportUri;
  }
}
