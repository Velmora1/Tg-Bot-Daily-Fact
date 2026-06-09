import "dotenv/config"
import { Bot } from "grammy"
import { startCommand } from "./commands/start.command"
import { connectDB } from "./config/database"
import { factKeyboardCallback, subKeyboardCallback, helpKeyboardCallback } from "./Handler/callbacks/main"
import { factCommand} from "../scr/commands/fact.command"
import { initCronJobs } from "./services/cron.service"
import { subCommand } from "./commands/sub.command"
import { helpCommand } from "./commands/help.command"


const bot = new Bot(process.env.BOT_TOKEN!)

const start = async () => {
    await connectDB()
    subCommand(bot)
    factKeyboardCallback(bot)
    subKeyboardCallback(bot)
    helpKeyboardCallback(bot)
    helpCommand(bot)
    startCommand(bot)
    factCommand(bot)
    initCronJobs(bot)
    await bot.start()
    console.log("bot started")
}

start()
