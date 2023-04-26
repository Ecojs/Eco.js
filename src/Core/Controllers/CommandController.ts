import {
  CommandResult,
  ICommandResult,
} from "../../structures/Eco/Web/Core/DataTransferObjects/V1/CommandResult";
import { IExecuteCommand } from "../../structures/Eco/Web/Core/DataTransferObjects/V1/ExecuteCommand";
import ECO from "../ECO";
import { ControllerBase } from "./ControllerBase";

export class CommandController extends ControllerBase {
  constructor(client: ECO) {
    super(client);
  }
  public async exec(Command: string) {
    return this.POST<CommandResult, ICommandResult, IExecuteCommand>(
      "/api/v1/command/exec",
      { Command },
      CommandResult
    );
  }

  public async announce(alert: string) {
    return this.exec(`manage announce ${alert}`);
  }
  public async alert(alert: string) {
    return this.exec(`manage alert ${alert}`);
  }
  public async kick(user: string, reason = "You have been Kicked.") {
    return this.exec(`kick ${user},${reason}`);
  }
  public async ban(user: string, reason: string, time: string) {
    return this.exec(`ban ${user},${reason},${time}`);
  }
  public async unban(user: string) {
    return this.exec(`unban ${user}`);
  }
  public async mute(user: string, reason: string, time: string) {
    return this.exec(`mute ${user},${reason},${time}`);
  }
  public async unmute(user: string) {
    return this.exec(`unmute ${user}`);
  }
}
