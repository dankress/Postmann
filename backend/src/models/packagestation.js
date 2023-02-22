import mongoose from "mongoose";

const packagestationSchema = new mongoose.Schema({
  id: Int,
  number: Int,
  street: String,
  city: String,
  zip: Int,
  country: String,
  status: String,
});

export const packagestation = mongoose.model("Packagestation", packagestationSchema);