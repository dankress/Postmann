import express from "express";
import{
    getShipments,
    getShipmentsByTrackingNumber,
    addShipment,
    newShipmentValidators,
    patchShipmentsValidator,
    patchSchipmentsByTrackingnumber,
    deleteShipmentsByTrackingNumber
}from "../controllers/shipmentsControllers.js";

const router = express.Router();

router.get("/", getShipments);
router.get("/trackingNumber", getShipmentsByTrackingNumber);
router.post("/", newShipmentValidators, addShipment);
router.delete("/trackingNumber",deleteShipmentsByTrackingNumber);
router.patch("/trackingNumber",patchShipmentsValidator,patchSchipmentsByTrackingnumber)

export default router;