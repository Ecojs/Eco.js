export interface IUser {
  Name?: string
  SlgId?: string
  SteamId?: string
}

export class User implements IUser {
  public Name?: string
  public SlgId?: string
  public SteamId?: string
  constructor($b: IUser = {} as IUser){
    this.Name = $b.Name
    this.SlgId = $b.SlgId
    this.SteamId = $b.SteamId
  }
}
