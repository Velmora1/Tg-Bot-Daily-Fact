import { Context, NextFunction } from "grammy"
import { UserModel } from "../Modules/userModules"

export async function authMiddleware(ctx: Context, next: NextFunction) {
  const telegramId = ctx.from?.id

  if (!telegramId) return;

  const userExists = await UserModel.exists({ telegramId })

  if (!userExists) {
    await ctx.reply("First /start then everything else")
    return
  }
  
  await next()
}
