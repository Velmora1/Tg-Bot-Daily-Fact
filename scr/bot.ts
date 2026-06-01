import "dotenv/config"
import { Bot } from "grammy"
import { startCommand } from "./commands/start.commands"
import { connectDB } from "./config/database"
import { mainKeyboardCallback } from "./FileHandler/callbacks/main"
import { factCommand} from "../scr/commands/fact.commands"


const bot = new Bot(process.env.BOT_TOKEN!)

const start = async () => {
    await connectDB()
    mainKeyboardCallback(bot)
    startCommand(bot)
    factCommand(bot)
    await bot.start()
    console.log("bot started")
}

start()
