import mongoose, { Document, Schema } from "mongoose"

export interface IUser {
 telegramId: number,
 username?: string,
 sub: Boolean
 createdAt: Date,
}

const userSchema = new mongoose.Schema({
    telegramId:   { type: Number, required: true, unique: true },
    username:     { type: String, },
    sub: { type: Boolean, default: false },
    createdAt:    { type: Date, default: Date.now },
})

export const UserModel = mongoose.model<IUser>("user", userSchema)
