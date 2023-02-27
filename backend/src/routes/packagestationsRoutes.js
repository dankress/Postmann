import express from "express";
import{
    getPackagestations,
    findPackagestationsByNumber,
    getPackagestationsById,
    addPackagestation,
    newPackagestationValidators
}from "../controllers/packagestationsControllers.js";

const router = express.Router();

router.get("/", getPackagestations);
router.get("/:id", getPackagestationsById);
router.get("/search", findPackagestationsByNumber);
router.post("/", newPackagestationValidators, addPackagestation);

export default router;