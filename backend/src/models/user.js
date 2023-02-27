import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    postnumber: int,
    firstName: String,
    name: String,
    street: String,
    city: String,
    zip: int,
    country: String,
    status: String,
});

export const User = mongoose.model("User", userSchema);