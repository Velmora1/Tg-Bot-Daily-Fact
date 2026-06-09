import { Bot } from "grammy"
import { subHandler } from "../Handler/sub.handler"
import { authMiddleware } from "../middlewares/auth.middleware"

export const subCommand = (bot: Bot) => {
  bot.command("sub", authMiddleware, subHandler)
}
