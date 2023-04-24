import { CommandMessage, ICommandMessage } from './CommandMessage';
export interface ICommandResult {
  CommandMessages?: ICommandMessage[]
  OriginalCommand?: string
  Errored: boolean
}
export class CommandResult implements ICommandResult {
  public CommandMessages?: ICommandMessage[]
  public OriginalCommand?: string
  public Errored: boolean;
  constructor($b: ICommandResult = {} as ICommandResult) {
    this.CommandMessages = $b.CommandMessages ? $b.CommandMessages.map(value => new CommandMessage(value)) : []
    this.OriginalCommand = $b.OriginalCommand
    this.Errored = $b.Errored
  }
}
