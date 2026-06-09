import { Bot } from "grammy"
import { helpHandler} from "../Handler/help.handler"


export const helpCommand = (bot: Bot) => {
  bot.command("help", helpHandler)
}
