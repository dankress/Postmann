import { check, validationResult } from "express-validator";
import { User } from "../models/user.js";

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
}

export const getUsersByPostnumber = async (req, res) => {
    let users = await User.find({postnumber: req.query.postnumber});
    res.status(200).send(users);
}
export const getUsersById = async (req, res) => {
    let result = await User.findById(req.params.id);
    req.status(200).send(result);
}
export const deleteUsersById = async (req, res) => {
    await User.deleteOne({_id: req.params.id})
    res.status(200).send("Done")
};
export const addUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const user = new User({
        postnumber: req.body.postnumber,
        firstName: req.body.firstName,
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        status: req.body.status,
    });

    user.save(user).then((todo) => res.status(201).send(todo));
};

export const newUserValidators =[
    check("postnumber").notEmpty().withMessage("postnumber is required"),
    check("firstName").notEmpty().withMessage("firstName is required"),
    check("name").notEmpty().withMessage("name is required"),
    check("street").notEmpty().withMessage("street is required"),
    check("city").notEmpty().withMessage("city is required"),
    check("zip").notEmpty().withMessage("zip is required"),
    check("country").notEmpty().withMessage("country is required"),
    check("status").notEmpty().withMessage("status is required"),
]