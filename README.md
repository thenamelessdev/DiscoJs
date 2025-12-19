# DiscoJs
DiscoJs is a tool to help you build interaction endpoint Discord bots. Using this you can make a serverless Discord bot.
https://www.npmjs.com/package/@thenamelessdev/discojs
# Config
To configure you have to call the config function and give it theese params:
- token:
  - Your Discord bot token
- errorChannelId:
  - Your Discord channel for errors. If there is an error with anything the error message will be sent there and into the console. Make sure your bot has send messages access to it
# Functions
## Message: Interact with message endpoints
**All message functions that create or modify a message will return a [message object](https://discord.com/developers/docs/resources/message#message-object)**
- sendMessage
  - channelId: the channel ID where the message should be sent
  - message: the message (optional)
  - embeds: an array of [embed objects](https://discord.com/developers/docs/resources/message#embed-object) (optional)
- deleteMessage
  - messageId: the ID of the message you want to delete
  - channelId: the channel ID of the message you want to delete
- replyMessage
  - messageId: the message you want to reply to
  - channelId: the channel the message you want to reply to is in
  - message: the message you want to reply with (optional)
  - embeds: an array of [embed objects](https://discord.com/developers/docs/resources/message#embed-object) (optional)
- editMessage channelId: string, messageId:string, message?: string, embeds?:any
  - channelId: the channel ID of the message you want to edit
  - messageId: the message ID of the message you want to edit
  - message: the message (optional)
  - embeds: an array of [embed objects](https://discord.com/developers/docs/resources/message#embed-object) (optional)
## Webhook: Interact with webhook endpoints (does not require config)
- executeWebhook
  - url: the webhook url (example: https://discord.com/api/v10/webhooks/webhookid/webhooktoken)
  - message: the message (optional)
  - embeds: an array of [embed objects](https://discord.com/developers/docs/resources/message#embed-object) (optional)
- deleteWebhook
  - url: the webhook url to delete
