import { Bot } from "grammy";
import { startHandler } from "../Handler/start.handler";

export const startCommand = (bot: Bot) => {
    bot.command("start", startHandler)
}
