import { ServerCategory } from '../States/ServerCategory'
import { SkillSpecializationSetting } from './SkillSpecializationSetting'

export interface IServerInfo {
  Id: string
  Name?: string
  Address?: string
  External: boolean
  GamePort: number
  WebPort: number
  IsLAN: boolean
  Description?: string
  DetailedDescription?: string
  Category: ServerCategory
  OnlinePlayers: number
  OnlinePlayersNames?: string[]
  AdminOnline: boolean
  TimeSinceStart: number
  TimeLeft: number
  Animals: number
  Plants: number
  Laws: number
  WorldSize?: string
  Version?: string
  EconomyDesc?: string
  SkillSpecialization?: string
  SkillSpecializationSetting: SkillSpecializationSetting
  WorldObjective?: string
  Language?: string
  HasPassword: boolean
  HasMeteor: boolean
  DistributionStationItems?: string
  Playtimes?: string
  DiscordAddress?: string
  IsPaused: boolean
  ActiveAndOnlinePlayers: number
  PeakActivePlayers: number
  MaxActivePlayers: number
  ShelfLifeMultiplier: number
  ExhaustionAfterHours: number
  IsLimitingHours: boolean
  ServerAchievements?: string[]
  RelayAddress?: string
  Access?: string
  readonly JoinUrl?: string
}
export class ServerInfo implements IServerInfo {
  public Id: string
  public Name?: string
  public Address?: string
  public External: boolean
  public GamePort: number
  public WebPort: number
  public IsLAN: boolean
  public Description?: string
  public DetailedDescription?: string
  public Category: ServerCategory
  public OnlinePlayers: number
  public OnlinePlayersNames?: string[]
  public AdminOnline: boolean
  public TimeSinceStart: number
  public TimeLeft: number
  public Animals: number
  public Plants: number
  public Laws: number
  public WorldSize?: string
  public Version?: string
  public EconomyDesc?: string
  public SkillSpecialization?: string
  public SkillSpecializationSetting: SkillSpecializationSetting
  public WorldObjective?: string
  public Language?: string
  public HasPassword: boolean
  public HasMeteor: boolean
  public DistributionStationItems?: string
  public Playtimes?: string
  public DiscordAddress?: string
  public IsPaused: boolean
  public ActiveAndOnlinePlayers: number
  public PeakActivePlayers: number
  public MaxActivePlayers: number
  public ShelfLifeMultiplier: number
  public ExhaustionAfterHours: number
  public IsLimitingHours: boolean
  public ServerAchievements?: string[]
  public RelayAddress?: string
  public Access?: string
  public readonly JoinUrl?: string
  constructor($b: IServerInfo = {} as IServerInfo) {
    this.Id = $b.Id
    this.Name = $b.Name
    this.Address = $b.Address
    this.External = $b.External
    this.GamePort = $b.GamePort
    this.WebPort = $b.WebPort
    this.IsLAN = $b.IsLAN
    this.Description = $b.Description
    this.DetailedDescription = $b.DetailedDescription
    this.Category = $b.Category
    this.OnlinePlayers = $b.OnlinePlayers
    this.OnlinePlayersNames = $b.OnlinePlayersNames
    this.AdminOnline = $b.AdminOnline
    this.TimeSinceStart = $b.TimeSinceStart
    this.TimeLeft = $b.TimeLeft
    this.Animals = $b.Animals
    this.Plants = $b.Plants
    this.Laws = $b.Laws
    this.WorldSize = $b.WorldSize
    this.Version = $b.Version
    this.EconomyDesc = $b.EconomyDesc
    this.SkillSpecialization = $b.SkillSpecialization
    this.SkillSpecializationSetting = $b.SkillSpecializationSetting
    this.WorldObjective = $b.WorldObjective
    this.Language = $b.Language
    this.HasPassword = $b.HasPassword
    this.HasMeteor = $b.HasMeteor
    this.DistributionStationItems = $b.DistributionStationItems
    this.Playtimes = $b.Playtimes
    this.DiscordAddress = $b.DiscordAddress
    this.IsPaused = $b.IsPaused
    this.ActiveAndOnlinePlayers = $b.ActiveAndOnlinePlayers
    this.PeakActivePlayers = $b.PeakActivePlayers
    this.MaxActivePlayers = $b.MaxActivePlayers
    this.ShelfLifeMultiplier = $b.ShelfLifeMultiplier
    this.ExhaustionAfterHours = $b.ExhaustionAfterHours
    this.IsLimitingHours = $b.IsLimitingHours
    this.ServerAchievements = $b.ServerAchievements
    this.RelayAddress = $b.RelayAddress
    this.Access = $b.Access
    this.JoinUrl = $b.JoinUrl
  }
}
