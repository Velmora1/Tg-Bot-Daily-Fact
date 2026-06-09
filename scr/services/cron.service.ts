import cron from "node-cron";
import { Bot } from "grammy";
import { UserModel, IUser } from "../Modules/userModules";
import { getRandomFact } from "../services/fact.service"

export function initCronJobs(bot: Bot) {
    
    cron.schedule("0 15 * * *", async () => {
        console.log("Cron work start");

        try {
            const subscribedUsers = await UserModel.find({ sub: true }).select("telegramId");

            if (subscribedUsers.length === 0) {
                console.log("NO users with active subscriptions.");
                return;
            }

            const fact = await getRandomFact() ?? "Unfortunately, we were unable to find any interesting facts today."
            for (const user of subscribedUsers) {
                try {
                    await bot.api.sendMessage(
                        user.telegramId, 
                        fact
                    )
                await new Promise(resolve => setTimeout(resolve, 49));
                     } catch (error: any)  {
                      if (error.description?.includes("forbiden") || error.code === 403) {
                      console.log(`User ${user.telegramId} blocked the bot. We are unsubscribing.`)
                      await UserModel.updateOne({ telegramId: user.telegramId}, error)
                      } else {
                   console.log(`Sending error for ${user.telegramId}: `, error);                      }
                     }
                     } 
                  } catch (dbError) {
                  console.log("Error when working with database in Cron", dbError)
                  }
                }, {
                timezone: "Europe/Kyiv"
                })
                }
