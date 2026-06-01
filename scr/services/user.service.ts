import mongoose from "mongoose"
import { UserModel, IUser } from "../Modules/userModules"

export async function saveUser(UserData: IUser): Promise<any> {

    try {
        const user = new UserModel(UserData)
        return await user.save()
    } catch (error: any) {
         throw error
    }
}
