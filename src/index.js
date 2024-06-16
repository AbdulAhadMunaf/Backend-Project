// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
        path: "/.env"
});

const port = process.env.PORT || 3000;
connectDB()
        .then(() => {
                app.on("error", (error) => {
                        console.log("ERR:", error);
                        throw error;
                })
                app.listen(port || 3000, () => {
                        console.log(`Server is running at port: ${port}`);
                })
        })
        .catch((err) => {
                console.log(`MongoDB connection failed !!!`, err);
        });

