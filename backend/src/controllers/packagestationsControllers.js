import { check, validationResult } from "express-validator";
import { Packagestation } from "../models/packagestation.js";

export const getPackagestations = async (req, res) => {
    try {
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

  export const getPackagestationsByNumber = async (req, res) => {
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

export const deletePackagestationsByNumber = async (req, res) => {
    try {
        let result = await Packagestation.find({number: req.query.number} )
        if (result.length === 0) {
            res.status(404).send('Package station not found');
          } else {
            await Packagestation.deleteOne({number: req.query.number})
            return res.status(200).send("Packagestation deleted")
          }
        }catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving package stations by number');
      }
};

export const patchPackagestationByNumber = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    try {
      let result = await Packagestation.find({number: req.query.number} )
        if (result.length === 0) {
            res.status(404).send('Package station not found');
          } else {
      let response = await Packagestation.findOneAndUpdate({number: req.query.number},{ $set: { street: req.query.street, city: req.query.city, zip: req.query.zip, country: req.query.country, status: req.query.status } },
        { new: true });
      res.status(200).send(response);
          }
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
  check("number")
  .notEmpty().withMessage("number is required")
  .isNumeric().withMessage("number must be numeric")
  .isLength({ min: 5, max: 5 }).withMessage("number must be 5 digits long"),

check("street")
  .notEmpty().withMessage("street is required")
  .isLength({ max: 100 }).withMessage("street must be less than or equal to 100 characters"),

check("city")
  .notEmpty().withMessage("city is required")
  .isAlpha().withMessage("city must only contain alphabetic characters")
  .isLength({ max: 50 }).withMessage("city must be less than or equal to 50 characters"),

check("zip")
  .notEmpty().withMessage("zip is required")
  .isNumeric().withMessage("zip must be numeric")
  .isLength({ min: 5, max: 5 }).withMessage("zip must be 5 digits long"),

check("country")
  .notEmpty().withMessage("country is required")
  .isAlpha().withMessage("country must only contain alphabetic characters")
  .isLength({ max: 50 }).withMessage("country must be less than or equal to 50 characters"),

check("status")
  .notEmpty().withMessage("status is required")
  .isIn(["active", "inactive"]).withMessage("status must be either 'active' or 'inactive'"),
]
export const patchPackagestationValidators =[
  
  check("number")
  .isNumeric().withMessage("number must be numeric")
  .isLength({ min: 5, max: 5 }).withMessage("number must be 5 digits long"),

check("street")
  .isLength({ max: 100 }).withMessage("street must be less than or equal to 100 characters"),

check("city")
  .isAlpha().withMessage("city must only contain alphabetic characters")
  .isLength({ max: 50 }).withMessage("city must be less than or equal to 50 characters"),

check("zip")
  .isNumeric().withMessage("zip must be numeric")
  .isLength({ min: 5, max: 5 }).withMessage("zip must be 5 digits long"),

check("country")
  .isAlpha().withMessage("country must only contain alphabetic characters")
  .isLength({ max: 50 }).withMessage("country must be less than or equal to 50 characters"),

check("status")
  .isIn(["active", "inactive"]).withMessage("status must be either 'active' or 'inactive'"),

]