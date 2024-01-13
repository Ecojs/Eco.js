import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';

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
