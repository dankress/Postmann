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

export const getShipmentsById = async (req, res) => {

    try {
        let result = await Shipment.findById(req.params.id)
        if (result.length === 0) {
            res.status(404).send('Shipment not found');
          } else {
        res.status(200).send(result);
          }
        }catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving shipment by id');
      }

}

export const deleteShipmentsById = async (req, res) => {

    try {
        let result = await Shipment.findById(req.params.id)
        if (result.length === 0) {
            res.status(404).send('Shipment not found');
          } else {
            await Packagestation.deleteOne({_id: req.params.id})
            return res.status(200).send("Shipment deleted")
          }
        }catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving shipment by id');
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
    check("trackingNumber").notEmpty().withMessage("trackingNumber is required"),
    check("street").notEmpty().withMessage("street is required"),
    check("city").notEmpty().withMessage("city is required"),
    check("zip").notEmpty().withMessage("zip is required"),
    check("country").notEmpty().withMessage("country is required"),
    check("status").notEmpty().withMessage("status is required"),
];