import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';

export interface IExecuteCommand {
  Command?: string;
}

export class ExecuteCommand
  extends ClientObjectBase
  implements IExecuteCommand
{
  public Command?: string;
  constructor(client: ECO, $b: IExecuteCommand = {} as IExecuteCommand) {
    super(client);
    this.Command = $b.Command;
  }
}
