import express from "express";
import{
    getShipments,
    getShipmentsByTrackingNumber,
    addShipment,
    newShipmentValidators,
    deleteShipmentsByTrackingNumber
}from "../controllers/shipmentsControllers.js";

const router = express.Router();

router.get("/", getShipments);
router.get("/searchbyTrackingNumber", getShipmentsByTrackingNumber);
router.get("/:trackingNumber", getShipmentsByTrackingNumber);
router.post("/", newShipmentValidators, addShipment);
router.post("/:trackingNumber",deleteShipmentsByTrackingNumber);

export default router;