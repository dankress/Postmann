import express from "express";
import{
    getShipments,
    findShipments,
    addShipment,
    newShipmentValidators
}from "./shipmentsControllers.js";

const router = express.Router();

router.get("/", getShipments);
router.get("/search", findShipments);
router.post("/", newShipmentValidators, addShipment);

export default router;