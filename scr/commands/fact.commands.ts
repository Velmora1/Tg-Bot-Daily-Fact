import { Bot } from "grammy"
import { Context } from "grammy"
import { getRandomFact } from "../services/fact.services"

export const factCommand = (bot: Bot) => {
bot.command("fact", async (ctx: Context) => {
 try {
   const factText = await getRandomFact()
  if (factText){
  await ctx.reply(`*an interesting fact:*\n${factText}`, {
        parse_mode: "Markdown"
      })
    } else {
  await ctx.reply("error fact:")
    }
 } catch (error) {
   console.error("Error in the /fact command handler:", error);
   await ctx.reply("An internal bot error has occurred.");
 }

})
}

