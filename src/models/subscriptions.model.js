import mongoose, { Schema } from "mongoose";

const subscriptions = new Schema(
    {
        subscriber : {
            type: Schema.Types.ObjectId,
            ref : "User",
            required :true,
        },
        channel : {
            type: Schema.Types.ObjectId,
            ref : "User",
            required :true,
        },
        

    }
    , {
        timestamps: true
    }
);

export const Subscriptions = new mongoose.model("Subscriptions", subscriptions);