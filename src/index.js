// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import express from "express"
const app = express();

import connectDB from "./db/index.js";

dotenv.config({
        path: "/.env"
});

connectDB();



// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("Application not able to talk to the database");
//             throw error;
//         });
 
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.log("ERROR", error);
//         throw error;
//     }
// })()