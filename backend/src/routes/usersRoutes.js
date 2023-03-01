import express from "express";
import{
    getUsers,
    addUser,
    newUserValidators,
    getUsersById,
    getUsersByPostnumber,
    deleteUsersById
}from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.get("/searchByPostnumber", getUsersByPostnumber);
router.post("/", newUserValidators, addUser);
router.post("/:id",deleteUsersById);

export default router;