import express from "express";
import{
    getShipments,
    getShipmentsByTrackingNumber,
    getShipmentsById,
    addShipment,
    newShipmentValidators
}from "../controllers/shipmentsControllers.js";

const router = express.Router();

router.get("/", getShipments);
router.get("/searchId", getShipmentsByTrackingNumber);
router.get("/:id", getShipmentsById);
router.post("/", newShipmentValidators, addShipment);

export default router;