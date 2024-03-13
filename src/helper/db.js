import mongoose from "mongoose";
import { DB_NAME } from "./Constants";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "task-manager",
        });
        d
        console.log("DB conected");
        console.log("connected with host ", connection.host);

    } catch (error) {
        console.log("Error connecting to the database: ");
        console.log(error);
    }
}