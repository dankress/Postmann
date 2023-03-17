import express from "express";
import{
    getPackagestations,
    getPackagestationsByNumber,
    addPackagestation,
    newPackagestationValidators,
    patchPackagestationValidators,
    patchPackagestationByNumber,
    deletePackagestationsByNumber
}from "../controllers/packagestationsControllers.js";

const router = express.Router();

router.get("/", getPackagestations);
router.get("/:number", getPackagestationsByNumber);
router.get("/search", getPackagestationsByNumber);
router.post("/", newPackagestationValidators, addPackagestation);
router.post("/:number",deletePackagestationsByNumber);
router.patch("/:number",patchPackagestationValidators, patchPackagestationByNumber)

export default router;