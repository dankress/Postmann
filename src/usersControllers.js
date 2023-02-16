import { check, validationResult } from "express-validator";

const users = [
    {
        id: 0,
        postnumber: 123215543243,
        name: "Nicolas",
        lastName: "Schwarzbarth",
        street: "Erzbergerstraße 121",
        city: "Karlsruhe",
        zip: 76133,
        country: "Germany",
        status: "member",
    }
]
export const getUsers = (req, res) => {
    res.status(200).send(users);
}

export const findUsers = (req, res) => {
    let users = users.filter((users) => users.number == req.query.number);
    res.status(200).send(users);
}
export const addUser = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let user = req.user;
    user.push(user);
    res.status(201).send('Added ${user.name} ${user.lastName} to the User database');
};

export const newUserValidators =[
    check("postnumber").notEmpty().withMessage("postnumber is required"),
    check("name").notEmpty().withMessage("name is required"),
    check("lastName").notEmpty().withMessage("lastName is required"),
    check("street").notEmpty().withMessage("street is required"),
    check("city").notEmpty().withMessage("city is required"),
    check("zip").notEmpty().withMessage("zip is required"),
    check("country").notEmpty().withMessage("country is required"),
    check("status").notEmpty().withMessage("status is required"),
]