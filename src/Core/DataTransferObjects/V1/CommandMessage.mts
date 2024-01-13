import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';

export interface ICommandMessage {
  Type?: string;
  Message?: string;
}
export class CommandMessage
  extends ClientObjectBase
  implements ICommandMessage
{
  public Type?: string;
  public Message?: string;
  constructor(client: ECO, $b: ICommandMessage = {} as ICommandMessage) {
    super(client);
    this.Type = $b.Type;
    this.Message = $b.Message;
  }
}
