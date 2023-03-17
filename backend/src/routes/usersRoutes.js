import express from "express";
import{
    getUsers,
    getUsersByPostnumber,
    addUser,
    newUserValidators,
    patchUserValidators,
    patchUserByPostnumber,
    deleteUsersByPostnumber
}from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/postnumber", getUsersByPostnumber);
router.post("/", newUserValidators, addUser);
router.delete("/postnumber",deleteUsersByPostnumber);
router.patch("/postnumber",patchUserValidators, patchUserByPostnumber)

export default router;