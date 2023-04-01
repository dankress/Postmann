import mongoose from "mongoose";

//Shema for a User
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
