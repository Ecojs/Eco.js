import ECO from '../ECO.js';
import { ClientObjectBase } from '../ClientObjectBase.js';
import { Action } from './Action.js';

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
