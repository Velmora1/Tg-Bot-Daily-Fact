import mongoose, { Document, Schema } from "mongoose"

export interface IUser {
 telegramId: number,
 username: string,
 createdAt: Date,
}

const userSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true, unique: true },
    username:   { type: String, required: true },
    createdAt:   { type: Date, default: Date.now },
})

export const UserModel = mongoose.model<IUser>("user", userSchema)