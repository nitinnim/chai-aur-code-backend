import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DATABASE_NAME}`);
    console.log("DB CONNECTED SUCCESSFULLY-",connectionInstance.connection.host);
  } catch (error) {
    console.log("ERROR IN DB CONNECTION: ", error);
    throw error;
  }
};

export default connectDB;