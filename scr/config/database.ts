import mongoose from "mongoose";
import { MONGO_URI } from "./env";

export async function connectDB(): Promise<void> {
try {
    await mongoose.connect(MONGO_URI)
    console.log("MongoDB connect!")
} catch(error: any) {
console.log("error connect: ", error)
process.exit(1)
}
}