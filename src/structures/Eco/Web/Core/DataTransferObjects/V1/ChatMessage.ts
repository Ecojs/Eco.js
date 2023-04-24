export interface IChatMessage {
  readonly Timestamp: number
  readonly Sender?: string
  readonly Receiver?: string
  readonly Text?: string
}

export class ChatMessage implements IChatMessage {
  public readonly Timestamp: number
  public readonly Sender?: string
  public readonly Receiver?: string
  public readonly Text?: string
  constructor($b: IChatMessage = {} as IChatMessage) {
    this.Timestamp = $b.Timestamp
    this.Sender = $b.Sender
    this.Receiver = $b.Receiver
    this.Text = $b.Text
  }
}
