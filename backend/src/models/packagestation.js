import mongoose from "mongoose";

const packagestationSchema = new mongoose.Schema({
  number: Number,
  street: String,
  city: String,
  zip: Number,
  country: String,
  status: String,
});

export const Packagestation = mongoose.model(
  "Packagestation",
  packagestationSchema
);
