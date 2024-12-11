import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Configure dotenv to load environment variables from a .env file

// Function to connect to the MongoDB database
const connectDB = async () => {

    // Connect to the MongoDB database using the connection string from environment variables
    const connection = await mongoose.connect("mongodb+srv://guvi:guvi123@cluster0.yej84.mongodb.net/");
    console.log("DB connected");
    return connection;
}

export default connectDB;