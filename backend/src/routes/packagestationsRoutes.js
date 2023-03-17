import express from "express";
import {
  getPackagestations,
  getPackagestationsByNumber,
  addPackagestation,
  newPackagestationValidators,
  patchPackagestationValidators,
  patchPackagestationByNumber,
  deletePackagestationsByNumber,
} from "../controllers/packagestationsControllers.js";

const router = express.Router();

router.get("/", getPackagestations);
router.get("/number", getPackagestationsByNumber);
router.post("/", newPackagestationValidators, addPackagestation);
router.delete("/number", deletePackagestationsByNumber);
router.patch(
  "/number",
  patchPackagestationValidators,
  patchPackagestationByNumber
);

export default router;
