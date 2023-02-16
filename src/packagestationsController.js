import { check, validationResult } from "express-validator";

const packagestations = [
    {
        id: 0,
        number:2432,
        street: "Erzbergerstraße 121",
        city: "Karlsruhe",
        zip: 76133,
        country: "Germany",
        status: "available",
    }
]
export const getPackagestations = (req, res) => {
    res.status(200).send(packagestations);
}

export const findPackagestations = (req, res) => {
    let packagestations = packagestations.filter((packagestations) => packagestations.number == req.query.number);
    res.status(200).send(packagestations);
}
export const addPackagestation = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let packagestation = req.packagestation;
    packagestation.push(packagestation);
    res.status(201).send('Added ${packagestation.nuber} to the Packagestation database');
};

export const newPackagestationValidators =[
    check("number").notEmpty().withMessage("number is required"),
    check("street").notEmpty().withMessage("street is required"),
    check("city").notEmpty().withMessage("city is required"),
    check("zip").notEmpty().withMessage("zip is required"),
    check("country").notEmpty().withMessage("country is required"),
    check("status").notEmpty().withMessage("status is required"),
]