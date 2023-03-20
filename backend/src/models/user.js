import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  postnumber: String,
  firstName: String,
  name: String,
  street: String,
  city: String,
  zip: String,
  country: String,
  status: String,
});

export const User = mongoose.model("User", userSchema);
