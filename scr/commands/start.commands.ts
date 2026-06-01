import { Bot } from "grammy";
import { startHandler } from "../FileHandler/start.handler";

export const startCommand = (bot: Bot) => {
    bot.command("start", startHandler)
}