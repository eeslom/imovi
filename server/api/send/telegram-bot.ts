export default defineEventHandler(async (event) => {
  const { botToken, chatId } = useRuntimeConfig(event).public.telegramBot
  const { text } = getQuery(event)

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
  catch (error) { return };
})
