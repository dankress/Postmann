import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
  trackingNumber: String,
  street: String,
  city: String,
  zip: String,
  country: String,
  status: String,
  weight: String,
});

export const Shipment = mongoose.model("Shipment", shipmentSchema);
