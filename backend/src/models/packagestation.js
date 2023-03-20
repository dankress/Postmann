import mongoose from "mongoose";

const packagestationSchema = new mongoose.Schema({
  number: String,
  street: String,
  city: String,
  zip: String,
  country: String,
  status: String,
});

export const Packagestation = mongoose.model(
  "Packagestation",
  packagestationSchema
);
