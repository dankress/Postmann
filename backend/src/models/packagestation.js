import mongoose from "mongoose";

const packagestationSchema = new mongoose.Schema({
  number: int,
  street: String,
  city: String,
  zip: int,
  country: String,
  status: String,
});

export const Packagestation = mongoose.model("Packagestation", packagestationSchema);