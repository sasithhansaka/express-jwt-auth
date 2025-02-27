import mongoose, { version } from "mongoose";
import "dotenv/config";

const clientOptions = {
  serverapi: { version: "1", strict: true, deprecationErrors: true },
};


const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, clientOptions)
}

export default connectDB;