import { check, validationResult } from "express-validator";
import { Packagestation } from "../models/packagestation.js";

export const getPackagestations = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const packagestations = await Packagestation.find();
    res.status(200).send(packagestations);
};

export const findPackagestationsByNumber = async (req, res) => {
    let result = await Packagestation.find({number: req.query.number});
    res.status(200).send(result);
};

export const getPackagestationsById = async (req, res) => {
    let result = await Packagestation.findById(req.params.id)
    res.status(200).send(result);
};

export const deletePackagestationsById = async (req, res) => {
    let packagestation = await Packagestation.findById(req.params.id)
    if(packagestation !=null) {
        await Packagestation.deleteOne({_id: req.params.id})
        return res.status(200).send("Done")
    }
    
    
    res.status(400).send("Not found")
};

export const patchPackagestationById = async (req, res) => {
    
   let response = await Packagestation.findByIdAndUpdate(req.params.id,req.body,{
    new: false,
   });

   res.status(200).send(response);
  };


export const addPackagestation = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const packagestation = new Packagestation({
        number: req.body.number,
        street: req.body.street,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        status: req.body.status,
    });

    packagestation.save(packagestation).then((todo) => res.status(201).send(todo));
};

export const newPackagestationValidators =[
    check("number").notEmpty().withMessage("number is required"),
    check("street").notEmpty().withMessage("street is required"),
    check("city").notEmpty().withMessage("city is required"),
    check("zip").notEmpty().withMessage("zip is required"),
    check("country").notEmpty().withMessage("country is required"),
    check("status").notEmpty().withMessage("status is required"),
]