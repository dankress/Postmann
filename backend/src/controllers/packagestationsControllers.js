import { check, validationResult } from "express-validator";
import { Packagestation } from "../models/packagestation.js";

export const getPackagestations = async (req, res) => {
    try {
      res.set("Access-Control-Allow-Origin", "http://localhost:3000");
      const packagestations = await Packagestation.find();
      if(packagestations.length === 0){
        res.status(404).send('No Packagestations found');
      }else{
        res.status(200).send(packagestations);
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving package stations');
    }
  };

  export const findPackagestationsByNumber = async (req, res) => {
    try {
      let result = await Packagestation.find({number: req.query.number});
      
      if (result.length === 0) {
        res.status(404).send('Package station not found');
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving package stations by number');
    }
  };

export const getPackagestationsById = async (req, res) => {
    try {
    let result = await Packagestation.findById(req.params.id)
    if (result.length === 0) {
        res.status(404).send('Package station not found');
      } else {
    res.status(200).send(result);
      }
    }catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving package stations by id');
  }
};

export const deletePackagestationsById = async (req, res) => {

    try {
        let result = await Packagestation.findById(req.params.id)
        if (result.length === 0) {
            res.status(404).send('Package station not found');
          } else {
            await Packagestation.deleteOne({_id: req.params.id})
            return res.status(200).send("Packagestation deleted")
          }
        }catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving package stations by id');
      }
};

export const patchPackagestationById = async (req, res) => {
    try {
      let response = await Packagestation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating package station');
    }
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