import { Action } from './Action';

export interface IAdminReturnModel {
  Action: Action
  Message?: string
}

export class AdminReturnModel implements IAdminReturnModel {
  public Action: Action;
  public Message?: string
  constructor($b: IAdminReturnModel = {} as IAdminReturnModel){
    this.Action = $b.Action
    this.Message = $b.Message
  }
}
