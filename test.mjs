import 'dotenv/config';
import * as ecoPkg from './lib/index.js';
const { ECO } = ecoPkg;
const server = new ECO();
server.HttpClient.debug = false;

server.isReady.then(() => {
  server.on('NEW_MESSAGE', (m) => {
    if (
      m.Text.toLocaleLowerCase().startsWith('im ') ||
      m.Text.toLocaleLowerCase().startsWith("i'm ")
    ) {
      console.log(m.senderUser);
      server.chat.sendChat(
        '#General',
        `Hello ${(m.Text[2] == "'"
          ? m.Text.substring(4)
          : m.Text.substring(3)
        ).trim()}, I'm Dad.`,
        '[BOT] Dad'
      );
    }
    console.log(`${m}`);
  });
});
