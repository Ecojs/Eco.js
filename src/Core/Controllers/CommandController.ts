import {
  CommandResult,
  ICommandResult,
} from '../DataTransferObjects/V1/CommandResult.js';
import { IExecuteCommand } from '../DataTransferObjects/V1/ExecuteCommand.js';
import ECO from '../ECO.js';
import { ControllerBase } from './ControllerBase.js';

export class CommandController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async exec(Command: string) {
    return this.POST<CommandResult, ICommandResult, IExecuteCommand>(
      '/api/v1/command/exec',
      { Command },
      CommandResult,
    );
  }

  public async announce(alert: string) {
    return this.exec(`manage announce ${alert}`);
  }
  public async alert(alert: string) {
    return this.exec(`manage alert ${alert}`);
  }
  public async kick(user: string, reason = 'You have been Kicked.') {
    return this.exec(`kick ${user},${reason}`);
  }
  public async ban(
    user: string,
    reason = 'You have been Banned',
    time?: string,
  ) {
    return this.exec(`ban ${user},${reason}${time ? `,${time}` : ''}`);
  }
  public async unban(user: string, reason = 'You have been Un-muted') {
    return this.exec(`unban ${user},${reason}`);
  }
  public async mute(
    user: string,
    reason = 'You have been Muted.',
    time?: string,
  ) {
    return this.exec(`mute ${user},${reason}${time ? `,${time}` : ''}`);
  }
  public async unmute(user: string, reason = 'You have been Un-muted') {
    return this.exec(`unmute ${user},${reason}`);
  }
  public async warn(
    user: string,
    text: string,
    size = 1,
    type: 'notification' | 'popup' | 'okbox' = 'notification',
    addToMail = false,
    windowHeader = '',
  ) {
    return this.exec(
      `warn ${user},${text},${size},${type == 'popup'},${
        type == 'okbox'
      },${addToMail},${windowHeader}`,
    );
  }
}
