import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo connected successfully")
    } catch (error) {
        console.log(`mongo not connected `,error)
    }
}