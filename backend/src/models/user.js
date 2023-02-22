import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: int,
    postnumber: int,
    firstName: String,
    name: String,
    street: String,
    city: String,
    zip: Int,
    country: String,
    status: String,
});

export const user = mongoose.model("User", userSchema);