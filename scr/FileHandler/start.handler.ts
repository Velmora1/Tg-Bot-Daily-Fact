import { Context } from "grammy";
import { saveUser } from "../services/user.service";
import { mainKeyboard } from "../keyboards/main.keybord"

export const startHandler = async (ctx: Context) => {

    try {
        await saveUser ({
        telegramId: ctx.from!.id,
        username:   ctx.from?.username ?? "",
        createdAt:   new Date()
        } as any)

    await ctx.reply("Welcome! Choose what you want", {
        reply_markup: mainKeyboard
    })
    } catch (error: any)   {
   if (error?.code === 11000) {
await ctx.reply("Welcome! Choose what you want", {
    reply_markup: mainKeyboard
})
   } else {
    console.log("SaveUser error: ", error)
   }
    }
}