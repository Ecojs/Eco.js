import ECO from '../../../../../Core/ECO';
import { ClientObjectBase } from '../../../../ClientObjectBase';
import { Action } from './Action';

export interface IAdminReturnModel {
  Action: Action
  Message?: string
}

export class AdminReturnModel extends ClientObjectBase implements IAdminReturnModel {
  public Action: Action;
  public Message?: string
  constructor(client: ECO, $b: IAdminReturnModel = {} as IAdminReturnModel) {
    super(client)
    this.Action = $b.Action
    this.Message = $b.Message
  }
}
