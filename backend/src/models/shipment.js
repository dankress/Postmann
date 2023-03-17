import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
  trackingNumber: Number,
  street: String,
  city: String,
  zip: Number,
  country: String,
  status: String,
  weight: String,
});

export const Shipment = mongoose.model("Shipment", shipmentSchema);
