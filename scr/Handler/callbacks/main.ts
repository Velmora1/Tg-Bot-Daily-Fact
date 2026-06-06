import { Bot } from "grammy"
import { callbackFact } from "./fact.callback"
import { callbackSub } from "./sub.callback"

export function factKeyboardCallback(bot: Bot) {
    bot.callbackQuery("f_run", callbackFact)
}

export function subKeyboardCallback(bot: Bot) {
  bot.callbackQuery("s_run", callbackSub)
}
