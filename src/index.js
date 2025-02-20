import dotenv from "dotenv";
dotenv.config({
    path: './env'
});
import connectDB from './db/index.js';

connectDB();









/*   ("ONE WAY TO CONNECT TO DB AND START SERVER")

import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DATABASE_NAME}`)
        console.log("DB CONNECTED SUCCESSFULLY");
        app.on('error', (err) => {
            console.log("ERROR IN EXPRESS SERVER: ",err);
            throw err;
        })
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        })
    } catch (error) {
        console.log("ERROR IN DB CONNECTION: ",error);
        throw error;
    }
} )()

*/