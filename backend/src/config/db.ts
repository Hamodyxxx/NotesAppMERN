import mongoose from "mongoose";

export const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI || "");

        console.log("DATABASE CONNECTED");
    } catch (error) {
        console.log("Error connecting to DATABASE", error);

        process.exit(1);
    }
}