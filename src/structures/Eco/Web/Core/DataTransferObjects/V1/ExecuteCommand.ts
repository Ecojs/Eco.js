export interface IExecuteCommand {
  Command?: string
}

export class ExecuteCommand implements IExecuteCommand {
  public Command?: string
  constructor($b: IExecuteCommand = {} as IExecuteCommand){
    this.Command = $b.Command
  }
}
