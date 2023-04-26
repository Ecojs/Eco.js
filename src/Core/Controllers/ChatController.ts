import { IChatMessage, ChatMessage } from '../../structures/Eco/Web/Core/DataTransferObjects/V1/ChatMessage';
import ECO from '../ECO';
import { ControllerBase } from './ControllerBase';
import type { IUser } from '../../structures/Eco/Web/Core/DataTransferObjects/V1/User';

export class ChatController extends ControllerBase {
  constructor(client: ECO) {
    super(client)
  }
  /**
   * Create a ChatMessage object
   */
  public createMessage(options: (Omit<Required<IChatMessage>, 'Timestamp'> & { Timestamp?: number })): ChatMessage {
    if (options.Timestamp == null) options.Timestamp = Date.now();
    return new ChatMessage(this.client, options as IChatMessage)
  }

  /**
   * Send a message to a Channel or User
   */
  public sendMessage(receiver: string | IUser, sender: string | IUser, text: string): Promise<unknown>
  public sendMessage(receiver: string | IUser, sender?: string | IUser, text?: string): Promise<unknown> {
    let channel = (receiver as IUser)?.Name ?? receiver as string
    if (channel.charAt(0) != '#' && channel.charAt(0) != '@') {
      channel = `@${channel}`
    }
    let sendingUser = encodeURIComponent((sender as IUser)?.Name ?? sender as string)
    let message = encodeURIComponent(text as string)

    return this.GET(`/api/v1/chat/sendChat?username=${sendingUser}&message=${channel} ${message}`)
  }
}
