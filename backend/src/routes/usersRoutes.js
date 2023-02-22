import express from "express";
import{
    getUsers,
    findUsers,
    addUser,
    newUserValidators
}from "../controllers/usersControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/search", findUsers);
router.post("/", newUserValidators, addUser);

export default router;