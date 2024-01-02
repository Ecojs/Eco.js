![npm](https://img.shields.io/npm/dw/eco.js) ![GitHub Sponsors](https://img.shields.io/github/sponsors/bombitmanbomb) [![GitHub issues](https://img.shields.io/github/issues/ecojs/eco.js)](https://github.com/ecojs/eco.js/issues) ![GitHub](https://img.shields.io/badge/license-MIT-brightgreen) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/eco.js) [![Codacy grade](https://img.shields.io/codacy/grade/bc777618c71e42fb87caae1c0c970327?logo=codacy)](https://www.codacy.com/gh/ecojs/eco.js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ecojs/eco.js&utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/badge/node->=16.0.0-brightgreen) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ecojs/eco.js)

![GitHub package.json version](https://img.shields.io/github/package-json/v/ecojs/eco.js) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ecojs/eco.js)

<!-- TOC -->

- [V10 Compatible!](#v10-compatible)
- [ECO API Interface](#eco-api-interface)
- [Installation](#installation)
- [Setup](#setup)
  - [Eco.js](#ecojs)
  - [Server Configs - **Important**](#server-configs---important)
  - [Env](#env)
  - [Disabling Chat Hooks](#disabling-chat-hooks)
- [Documentation](#documentation)
- [Usage](#usage)
- [TextUtils](#textutils)

<!-- /TOC -->

# V10 Compatible!

Eco.js has been updated to support Eco v10

# ECO API Interface

Eco.js is a full WebAPI Interface for ECO GameServers for remote automated management and bots.

Just want an RCON library and not the full toolset? Check out [@eco.js/rcon](https://github.com/Ecojs/Rcon).

# Installation

```bash
npm install eco.js
```

# Setup

## Eco.js

> `base_url` - The `WebServerUrl` (or IP) & `WebServerPort` as defined in `Network.eco` config.

> `api_key` - The `APIAdminAuthToken` as defined in `Users.eco` config.

> `serverVirtualPlayerName` - The name for the Server when using Chat. (_Default_ `[Server]`)

> `serverChatUpdateInterval` - Time (in ms) between checks for new chat messages.

## Server Configs - **Important**

Eco.js **requires** an `APIAdminAuthToken` to make any authenticated calls. A Non-admin or User token can be used for limited read-only access.

You must also enable `AllowDebugCalls` to make use of Chat features.

Both of these can be found in the `Users.eco` config file on your server.

## Env

If certain startup options are omitted from `new ECO({});`, the library will read from the following ENV variables:

- `ECO_BASE_URL`
- `ECO_API_KEY`

## Disabling Chat Hooks

To disable chat polling, pass `serverChatUpdateInterval: 0` to the Startup perms.

# Documentation

Documentation can be found [HERE](https://ecojs.github.io/Eco.js)

![Docs](https://img.shields.io/website?down_color=red&down_message=offline&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fecojs.github.io%2FEco.js%2Fmodules.html)

# Usage

```ts
import { ECO } from 'eco.js';
// const { ECO } = await import('eco.js');
const server = new ECO({
  base_url: 'https://127.0.0.1:3001',
  api_key: 'myAwesomeAPIAdminToken', // Admin Token **REQUIRED** for full features
  serverVirtualPlayerName: '[Server]', // Name of the Bot when Messaging users
  serverChatUpdateInterval: 5000, // Polling Interval for new messages, in Milliseconds
});

server.isReady.then(() => {
  server.on('CHAT_MESSAGE', (chat_message) => {
    if (
      chat_message.Receiver == 'General' &&
      chat_message.Text?.startsWith('!kickme')
    ) {
      chat_message.senderUser.kick('User ran !kickme');
    }
  });
});
```

# TextUtils

```ts
import { TextUtils } from 'eco.js';
const { color, foldout, table, italic, bold } = TextUtils;

server.chat.sendChat(
  '#General',
  `I can also do ${color('Colored Text', '#ffaa00')}, ${italic(
    bold('Styling'),
  )} and ${foldout(
    color('Hoverable Text', '#00ff00'),
    'With Tables!',
    table([
      ['Column 1', 'Column2'],
      ['Much', 'Wow'],
    ]),
  )}`,
);
```

![ColorTextDemo](/.github/assets/color_demo.png)
