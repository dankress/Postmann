import { check, validationResult } from "express-validator";
import { Shipment } from "../models/shipment.js";


export const getShipments = async (req, res) => {

    try {
        const shipments = await Shipment.find();
        if(shipments.length === 0){
          res.status(404).send('No shipments found');
        }else{
          res.status(200).send(shipments);
        }
        
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving shipments');
      }
    
    
}

export const getShipmentsByTrackingNumber = async (req, res) => {
    try {
         let result = await Shipment.find({trackingNumber: req.query.trackingNumber});
        
        if (result.length === 0) {
          res.status(404).send('Shipment not found');
        } else {
          res.status(200).send(result);
        }
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving shipment by number');
      }
}

export const deleteShipmentsByTrackingNumber = async (req, res) => {

    try {
        let result = await Shipment.getShipmentsByTrackingNumber(req.params.trackingNumber)
        if (result.length === 0) {
            res.status(404).send('Shipment not found');
          } else {
            await Packagestation.deleteOne({_trackingNumber: req.params.trackingNumber})
            return res.status(200).send("Shipment deleted")
          }
        }catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving shipment by tracking number');
      }
};

export const addShipment = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
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
};


export const newShipmentValidators =[
  check("trackingNumber")
  .notEmpty().withMessage("trackingNumber is required")
  .isLength({ min: 10, max: 10 }).withMessage("trackingNumber must be 10 characters long")
  .matches(/^[a-zA-Z0-9]+$/).withMessage("trackingNumber must only contain alphanumeric characters"),

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

check("weight")
  .notEmpty().withMessage("weight is required")
  .isNumeric().withMessage("weight must be numeric")
  .isFloat({ min: 0.1, max: 1000 }).withMessage("weight must be between 0.1 and 1000"),
];