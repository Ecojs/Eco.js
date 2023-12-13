# V10 Compatible!

# ECO API Interface

![npm](https://img.shields.io/npm/dw/eco.js) ![GitHub Sponsors](https://img.shields.io/github/sponsors/bombitmanbomb) [![GitHub issues](https://img.shields.io/github/issues/ecojs/eco.js)](https://github.com/ecojs/eco.js/issues) ![GitHub](https://img.shields.io/badge/license-MIT-brightgreen) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/eco.js) [![Codacy grade](https://img.shields.io/codacy/grade/bc777618c71e42fb87caae1c0c970327?logo=codacy)](https://www.codacy.com/gh/ecojs/eco.js/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ecojs/eco.js&utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/badge/node->=16.0.0-brightgreen) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ecojs/eco.js)

![GitHub package.json version](https://img.shields.io/github/package-json/v/ecojs/eco.js) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ecojs/eco.js)

Eco.js is a full WebAPI Interface for ECO GameServers.

# Installation

NPM

```bash
npm install eco.js
```

YARN

```bash
yarn add eco.js
```

# Documentation

Documentation can be found [HERE](https://ecojs.github.io/Eco.js)

![Docs](https://img.shields.io/website?down_color=red&down_message=offline&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fecojs.github.io%2FEco.js%2Fmodules.html)

# Usage

```ts
import { ECO } from "eco.js";

const server = new ECO({
  base_url: "https://127.0.0.1",
  api_key: "myAwesomeAPIAdminToken", // Admin Token **REQUIRED** for full features
  serverVirtualPlayerName: "[Server]", // Name of the Bot when Messaging users
  serverChatUpdateInterval: 5000, // Polling Interval for new messages, in Milliseconds
});

server.isReady.then(() => {
  server.on("NEW_MESSAGE", (chat_message) => {
    if (
      chat_message.Receiver == "General" &&
      chat_message.Text?.startsWith("!kickme")
    ) {
      chat_message.senderUser.kick("User ran !kickme");
    }
  });
});
```
