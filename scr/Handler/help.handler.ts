import { Context } from "grammy"

export async function helpHandler (ctx: Context) {
const helpText = `DailyFact Bot Help\n 
Here is what I can do:
• /start - Start the bot and open the main menu
• /fact - Get a random interesting fact right now
• /sub - Toggle daily newsletter (1 fact every day at 15:00 Kyiv time)
• /help - Show this help message with command descriptions`
await ctx.reply(helpText)
}
