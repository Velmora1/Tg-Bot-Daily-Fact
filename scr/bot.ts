import "dotenv/config"
import { Bot } from "grammy"
import { startCommand } from "./commands/start.command"
import { connectDB } from "./config/database"
import { factKeyboardCallback, subKeyboardCallback} from "./Handler/callbacks/main"
import { factCommand} from "../scr/commands/fact.command"
import { initCronJobs } from "./services/cron.service"
import { subCommand } from "./commands/sub.command"



const bot = new Bot(process.env.BOT_TOKEN!)

const start = async () => {
    await connectDB()
    factKeyboardCallback(bot)
    subKeyboardCallback(bot)
    startCommand(bot)
    factCommand(bot)
    initCronJobs(bot)
    subCommand(bot)
    await bot.start()
    console.log("bot started")
}

start()
