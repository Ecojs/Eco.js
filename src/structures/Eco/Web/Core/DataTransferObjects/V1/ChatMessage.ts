import ECO from "../../../../../../Core/ECO";
import { ClientObjectBase } from "../../../../../ClientObjectBase";

export interface IChatMessage {
  readonly Timestamp: number;
  readonly Sender?: string;
  readonly Receiver?: string;
  readonly Text?: string;
}

export class ChatMessage extends ClientObjectBase implements IChatMessage {
  public readonly Timestamp: number;
  public readonly Sender?: string;
  public readonly Receiver?: string;
  public readonly Text?: string;
  constructor(client: ECO, $b: IChatMessage = {} as IChatMessage) {
    super(client);
    this.Timestamp = $b.Timestamp;
    this.Sender = $b.Sender;
    this.Receiver = $b.Receiver;
    this.Text = $b.Text;
  }
}
