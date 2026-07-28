export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { text } = getQuery(event)

  const botToken = event.context.cloudflare.env.TELEGRAM_BOT_TOKEN || config.telegramBot.botToken
  const chatId = event.context.cloudflare.env.TELEGRAM_CHAT_ID || config.telegramBot.chatId

  try {
    await $fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      },
    })
  }
  catch (e: any) { return };
})
