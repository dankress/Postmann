import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  postnumber: Number,
  firstName: String,
  name: String,
  street: String,
  city: String,
  zip: Number,
  country: String,
  status: String,
});

export const User = mongoose.model("User", userSchema);
