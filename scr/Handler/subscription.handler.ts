import { Context } from "grammy"
import { SaveUser } from "../services/user.service"

export const subscriptionHandler = async (ctx: Context) => {

  } try {
  await SaveUser.updateOne(
  {telegramId: ctx.from.id},
  [ { $set: { subscription: { $not "subscription" } } } ]
    
  } catch (error) {
    
  }
}
