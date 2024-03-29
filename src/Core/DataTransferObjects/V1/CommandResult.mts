import ECO from '../../ECO.mjs';
import { ClientObjectBase } from '../../ClientObjectBase.mjs';
import { CommandMessage, ICommandMessage } from './CommandMessage.mjs';
export interface ICommandResult {
  CommandMessages?: ICommandMessage[];
  OriginalCommand?: string;
  Errored: boolean;
}
export class CommandResult extends ClientObjectBase implements ICommandResult {
  public CommandMessages?: ICommandMessage[];
  public OriginalCommand?: string;
  public Errored: boolean;
  constructor(client: ECO, $b: ICommandResult = {} as ICommandResult) {
    super(client);
    this.CommandMessages = $b.CommandMessages
      ? $b.CommandMessages.map(
          (value) => new CommandMessage(this.client, value),
        )
      : [];
    this.OriginalCommand = $b.OriginalCommand;
    this.Errored = $b.Errored;
  }
}
