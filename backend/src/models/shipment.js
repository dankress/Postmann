import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
  id: Int,
  trackingNumber: Int,
  street: String,
  city: String,
  zip: Int,
  country: String,
  status: String,
  weight: String,
});

export const shipment = mongoose.model("Shipment", shipmentSchema);