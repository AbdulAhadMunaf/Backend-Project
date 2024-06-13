// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import express from "express"
const app = express();

import connectDB from "./db/index.js";

dotenv.config({
        path: "/.env"
});

const port = process.env.PORT || 8000;
connectDB()
        .then(() => {
                app.on("error", (error) => {
                        console.log("ERR:", error);
                        throw error;
                })
                app.listen(port || 8000, () => {
                        console.log(`Server is running at port: ${port}`);
                })
        })
        .catch((err) => {
                console.log(`MongoDB connection failed !!!`, err);
        });

