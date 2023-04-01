import { check, validationResult } from "express-validator";
import { Shipment } from "../models/shipment.js";

//Returns all Shipments in database
export const getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    if (shipments.length === 0) {
      res.status(404).send("No shipments found");
    } else {
      res.status(200).send(shipments);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving shipments");
  }
};

//Returns Shipment with specific Trackingnumber
export const getShipmentsByTrackingNumber = async (req, res) => {
  try {
    let result = await Shipment.find({
      trackingNumber: req.query.trackingNumber,
    });
    if (result.length === 0) {
      res.status(404).send("Shipment not found");
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving shipment by number");
  }
};

//Deletes Shipment with specific Trackingnumber, if it exists in the database
export const deleteShipmentsByTrackingNumber = async (req, res) => {
  try {
    let result = await Shipment.find({
      trackingNumber: req.query.trackingNumber,
    });
    if (result.length === 0) {
      res.status(404).send("Shipment not found");
    } else {
      await Shipment.deleteOne({ trackingNumber: req.query.trackingNumber });
      return res.status(200).send("Shipment deleted");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving shipment by tracking number");
  }
};

//Patches Shipment with specific Trackingnumber, if it exists in the database
export const patchSchipmentsByTrackingnumber = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let result = await Shipment.find({
      trackingNumber: req.query.trackingNumber,
    });
    if (result.length === 0) {
      res.status(404).send("Shipment not found");
    } else {
      let response = await Shipment.findOneAndUpdate(
        { trackingNumber: req.query.trackingNumber },
        {
          $set: {
            street: req.query.street,
            city: req.query.city,
            zip: req.query.zip,
            country: req.query.country,
            status: req.query.status,
            weight: req.body.weight,
          },
        },
        { new: true }
      );
      res.status(200).send(response);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating shipments");
  }
};

//Adds a new Shipment to the database, with the provided parameteres, if Trackingnumber does not already exist
export const addShipment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let result = await Shipment.find({ trackingNumber: req.body.trackingNumber });
  if (result.length === 0) {
    const shipment = new Shipment({
      trackingNumber: req.body.trackingNumber,
      street: req.body.street,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      status: req.body.status,
      weight: req.body.weight,
    });
    shipment.save(shipment).then((todo) => res.status(201).send(todo));
  } else {
    res.status(409).send("A Shipment with this trackingnumber already exists");
  }
};

//Validates the provided parameteres to create a new Shipment and checks if all needed parameteres are provided
export const newShipmentValidators = [
  check("trackingNumber")
    .notEmpty()
    .withMessage("trackingNumber is required")
    .isLength({ min: 10, max: 10 })
    .withMessage("trackingNumber must be 10 characters long")
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage("trackingNumber must only contain alphanumeric characters"),

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

  check("weight")
    .notEmpty()
    .withMessage("weight is required")
    .isNumeric()
    .withMessage("weight must be numeric")
    .isFloat({ min: 0.1, max: 1000 })
    .withMessage("weight must be between 0.1 and 1000"),
];

//Validates the provided parameteres for the patch of a Shipment
export const patchShipmentsValidator = [
  check("street")
    .optional({ nullable: true })
    .isLength({ max: 100 })
    .withMessage("street must be less than or equal to 100 characters"),

  check("city")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("city is required")
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

  check("weight")
    .optional({ nullable: true })
    .isNumeric()
    .withMessage("weight must be numeric")
    .isFloat({ min: 0.1, max: 1000 })
    .withMessage("weight must be between 0.1 and 1000"),
];
