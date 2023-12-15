import ECO from '../../ECO.js';
import { ClientObjectBase } from '../../ClientObjectBase.js';

export interface IUser {
  Name: string;
  SlgId?: string;
  SteamId?: string;
}

export class User extends ClientObjectBase implements IUser {
  public Name: string;
  public SlgId: string;
  public SteamId: string;
  constructor(client: ECO, $b: IUser = {} as IUser) {
    super(client);
    this.Name = $b.Name ?? '';
    this.SlgId = $b.SlgId ?? '';
    this.SteamId = $b.SteamId ?? '';
  }

  public async kick(reason: string) {
    return this.client.commands.kick(this.Name, reason);
  }
  public async ban(reason: string, time?: string) {
    return this.client.commands.ban(this.Name, reason, time);
  }
  public async mute(reason: string, time?: string) {
    return this.client.commands.mute(this.Name, reason, time);
  }
  public async unban(reason: string) {
    return this.client.commands.unban(this.Name, reason);
  }
  public async unmute(reason: string) {
    return this.client.commands.unmute(this.Name, reason);
  }
  public async warn(
    text: string,
    size = 1,
    type: 'notification' | 'popup' | 'okbox' = 'notification',
    addToMail = false,
    windowHeader = ''
  ) {
    return this.client.commands.warn(
      this.Name,
      text,
      size,
      type,
      addToMail,
      windowHeader
    );
  }
  public async whisper(text: string, usernameOverride?: string) {
    return this.client.chat.sendChat(
      this.Name as UserOrChannel,
      usernameOverride ?? this.client.serverVirtualPlayerName,
      text
    );
  }
}
