import { check, validationResult } from "express-validator";
import { Packagestation } from "../models/packagestation.js";

//Returns all Packagestations in database
export const getPackagestations = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const packagestations = await Packagestation.find();
    if (packagestations.length === 0) {
      res.status(404).send("No Packagestations found");
    } else {
      res.status(200).send(packagestations);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving package stations");
  }
};

//Returns Packagestation with specific number
export const getPackagestationsByNumber = async (req, res) => {
  try {
    let result = await Packagestation.find({ number: req.query.number });
    if (result.length === 0) {
      res.status(404).send("Package station not found");
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving package stations by number");
  }
};

//Deletes Packagestation with specific number, if it exists in the database
export const deletePackagestationsByNumber = async (req, res) => {
  try {
    let result = await Packagestation.find({ number: req.query.number });
    if (result.length === 0) {
      res.status(404).send("Package station not found");
    } else {
      await Packagestation.deleteOne({ number: req.query.number });
      return res.status(200).send("Packagestation deleted");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving package stations by number");
  }
};

//Patches Packagestation with specific number, if it exists in the database
export const patchPackagestationByNumber = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let result = await Packagestation.find({ number: req.query.number });
    if (result.length === 0) {
      res.status(404).send("Package station not found");
    } else {
      let response = await Packagestation.findOneAndUpdate(
        { number: req.query.number },
        {
          $set: {
            street: req.query.street,
            city: req.query.city,
            zip: req.query.zip,
            country: req.query.country,
            status: req.query.status,
          },
        },
        { new: true }
      );
      res.status(200).send(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating package station");
  }
};

//Adds a new Packagestation to the database, with the provided parameteres, if number does not already exist
export const addPackagestation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let result = await Packagestation.find({ number: req.body.number });
  if (result.length === 0) {
    const packagestation = new Packagestation({
      number: req.body.number,
      street: req.body.street,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      status: req.body.status,
    });

    packagestation
      .save(packagestation)
      .then((todo) => res.status(201).send(todo));
  } else {
    res.status(409).send("A Packagestation with this number already exists");
  }
};

//Validates the provided parameteres to create a new Packagestation and checks if all needed parameteres are provided
export const newPackagestationValidators = [
  check("number")
    .notEmpty()
    .withMessage("number is required")
    .isNumeric()
    .withMessage("number must be numeric")
    .isLength({ min: 5, max: 5 })
    .withMessage("number must be 5 digits long"),

  check("street")
    .notEmpty()
    .withMessage("street is required")
    .isLength({ max: 100 })
    .withMessage("street must be less than or equal to 100 characters"),

  check("city")
    .notEmpty()
    .withMessage("city is required")
    .isAlpha()
    .withMessage("city must only contain alphabetic characters")
    .isLength({ max: 50 })
    .withMessage("city must be less than or equal to 50 characters"),

  check("zip")
    .notEmpty()
    .withMessage("zip is required")
    .isNumeric()
    .withMessage("zip must be numeric")
    .isLength({ min: 5, max: 5 })
    .withMessage("zip must be 5 digits long"),

  check("country")
    .notEmpty()
    .withMessage("country is required")
    .isAlpha()
    .withMessage("country must only contain alphabetic characters")
    .isLength({ max: 50 })
    .withMessage("country must be less than or equal to 50 characters"),

  check("status")
    .notEmpty()
    .withMessage("status is required")
    .isIn(["active", "inactive"])
    .withMessage("status must be either 'active' or 'inactive'"),
];

//Validates the provided parameteres for the patch of a Packagestation
export const patchPackagestationValidators = [
  check("number")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("number must be numeric")
    .isLength({ min: 5, max: 5 })
    .withMessage("number must be 5 digits long"),

  check("street")
    .optional({ nullable: true })
    .isLength({ max: 100 })
    .withMessage("street must be less than or equal to 100 characters"),

  check("city")
    .optional({ nullable: true })
    .isAlpha()
    .withMessage("city must only contain alphabetic characters")
    .isLength({ max: 50 })
    .withMessage("city must be less than or equal to 50 characters"),

  check("zip")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("zip must be numeric")
    .isLength({ min: 5, max: 5 })
    .withMessage("zip must be 5 digits long"),

  check("country")
    .optional({ nullable: true })
    .isAlpha()
    .withMessage("country must only contain alphabetic characters")
    .isLength({ max: 50 })
    .withMessage("country must be less than or equal to 50 characters"),

  check("status")
    .optional({ nullable: true })
    .isIn(["active", "inactive"])
    .withMessage("status must be either 'active' or 'inactive'"),
];
