import { Context } from "grammy"
import { UserModel } from "../Modules/userModules"

export const subHandler = async (ctx: Context) => {
 try {
  const updateUser = await UserModel.findOneAndUpdate(
      { telegramId: ctx.from?.id },
      [
        { $set: { sub: { $not: "$sub" } } }
      ],
      { 
        returnDocument: "After",
        updatePipeline: true 
      } as any
    ) 

    const statusSub = (updateUser as any).sub ? "Active" : "off"

    await ctx.reply(`Subscription status has been successfully changed! It is now: ${statusSub}`)
 } catch (error: any) {
    console.log("sub error: ", error)
    await ctx.reply("An error occurred while updating your subscription")
 }
}
