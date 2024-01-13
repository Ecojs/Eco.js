import ECO from '../ECO.mjs';
import { ClientObjectBase } from '../ClientObjectBase.mjs';
import { Action } from './Action.mjs';

export interface IAdminReturnModel {
  Action: Action;
  Message?: string;
}

export class AdminReturnModel
  extends ClientObjectBase
  implements IAdminReturnModel
{
  public Action: Action;
  public Message?: string;
  constructor(client: ECO, $b: IAdminReturnModel = {} as IAdminReturnModel) {
    super(client);
    this.Action = $b.Action;
    this.Message = $b.Message;
  }
}
