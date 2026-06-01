import { Bot } from "grammy"
import { callbackFact } from "./fact.callback"

export function mainKeyboardCallback(bot: Bot) {
    bot.callbackQuery("f_run", callbackFact)
}
