import express from "express";
import{
    getPackagestations,
    findPackagestations,
    addPackagestation,
    newPackagestationValidators
}from "./packagestationsControllers.js";

const router = express.Router();

router.get("/", getPackagestations);
router.get("/search", findPackagestations);
router.post("/", newPackagestationValidators, addPackagestation);

export default router;