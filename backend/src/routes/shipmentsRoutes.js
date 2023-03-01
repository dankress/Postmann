import express from "express";
import{
    getShipments,
    getShipmentsByTrackingNumber,
    getShipmentsById,
    addShipment,
    newShipmentValidators,
    deleteShipmentsById
}from "../controllers/shipmentsControllers.js";

const router = express.Router();

router.get("/", getShipments);
router.get("/searchbyTrackingNumber", getShipmentsByTrackingNumber);
router.get("/:id", getShipmentsById);
router.post("/", newShipmentValidators, addShipment);
router.post("/:id",deleteShipmentsById);

export default router;