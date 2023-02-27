import express from "express";
import{
    getUsers,
    addUser,
    newUserValidators,
    getUsersById,
    getUsersByPostnumber
}from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/searchById", getUsersById);
router.get("/searchByPostnumber", getUsersByPostnumber);
router.post("/", newUserValidators, addUser);

export default router;