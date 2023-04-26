import ECO from '../../../../../../Core/ECO'
import { ClientObjectBase } from '../../../../../ClientObjectBase'

export interface IExecuteCommand {
  Command?: string
}

export class ExecuteCommand extends ClientObjectBase implements IExecuteCommand {
  public Command?: string
  constructor(client: ECO, $b: IExecuteCommand = {} as IExecuteCommand) {
    super(client)
    this.Command = $b.Command
  }
}
