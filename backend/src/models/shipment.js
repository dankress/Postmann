import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
  trackingNumber: int,
  street: String,
  city: String,
  zip: int,
  country: String,
  status: String,
  weight: String,
});

export const Shipment = mongoose.model("Shipment", shipmentSchema);