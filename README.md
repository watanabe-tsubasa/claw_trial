# CLAW_TRIAL

以下の手順でopenclaw, ollamaにやらせてみた

## ollamaのセットアップ

```sh
curl -fsSL https://ollama.com/install.sh | sh
```

```sh
ollama serve
```

今回は`MiniMax`使ってみた

## OpenClawのセットアップ

`ollama serve`された状態で別のターミナルを開く

```sh
npm install -g openclaw@latest
```

```sh
ollama launch openclaw
```

ollama側からopenclawの設定を開始して実行

最初は`/home/codespace/.openclaw/workspace`の中で動いているので、`pwd`で出てくる`/workspaces/claw_trial`の中で作業するようにopenclawに伝えて、Next.jsのコーディングを実施。

## LINEとopenclawの接続

### 1. line pluginのセットアップ

```sh
openclaw configure --section channels
```

これで、lineを許可させる

```sh
openclaw plugins list
```

でlineが繋がってればOK

### 2. gateway

```sh
openclaw gateway --force
```

### 3. `openclaw.json`の編集

`~/.openclaw/openclaw.json`を `code`で開く. 
うまく行っていれば、

```json
  "channels": {
    "line": {
      "enabled": true
    }
  },
```

となっているので

```json
  "channels": {
    "line": {
      "channelAccessToken": "LINE developersからコピペ",
      "channelSecret": "LINE developersからコピペ",
      "dmPolicy": "pairing",
      "enabled": true
    }
  },
```

という感じに改変。

### 4. LINE developersへのwebhook urlの記載

path parametorで`/line/webhook`

### 5. メッセージを送る

LINEから送ると、

```text
OpenClaw: access not configured.

Your lineUserId: U439dc3807475b0b2091a3a712ab6fb90

Pairing code: *****

Ask the bot owner to approve with:
openclaw pairing approve line *****
```

みたいな感じになるので、

```sh
openclaw pairing approve line *****
```

を実行

> 参考
>
> https://zenn.dev/n0bisuke/books/openclaw-linebot/viewer/1-2_setup_line

## 以下、デフォルトのNext.jsのREADME.md

````md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````
