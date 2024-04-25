import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
        // checks if DB connection is already established
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log("DB connected")
        }
    } catch (error) {
        console.log(error)
    }
}

export default connectDB