import express from "express";
import{
    getUsers,
    addUser,
    newUserValidators,
    getUsersByPostNumber,
    deleteUsersByPostNumber
}from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:postNumber", getUsersByPostNumber);
router.get("/searchByPostnumber", getUsersByPostNumber);
router.post("/", newUserValidators, addUser);
router.post("/:postNumber",deleteUsersByPostNumber);

export default router;