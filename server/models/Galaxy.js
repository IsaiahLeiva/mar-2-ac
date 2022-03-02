import { Schema } from "mongoose";


export const GalaxySchema = new Schema({
    name: { type: String, required: true },
    //TODO: add more properties
},
    //NOTE: Explain the line below
    { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('')