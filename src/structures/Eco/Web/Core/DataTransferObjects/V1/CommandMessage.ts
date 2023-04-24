export interface ICommandMessage {
  Type?: string
  Message?: string
}
export class CommandMessage implements ICommandMessage {
  public Type?: string
  public Message?: string
  constructor($b: ICommandMessage = {} as ICommandMessage) {
    this.Type = $b.Type
    this.Message = $b.Message
  }
}
