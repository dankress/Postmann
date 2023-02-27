import { check, validationResult } from "express-validator";
import { Shipment } from "../models/shipment.js";


export const getShipments = async (req, res) => {
    const shipments = await Shipment.find();
    res.status(200).send(shipments);
}

export const getShipmentsByTrackingNumber = async (req, res) => {
    let shipments = await Shipment.find({trackingNumber: req.query.trackingNumber});
    res.status(200).send(shipments);
}

export const getShipmentsById = async (req, res) => {
    let result = await Shipment.findById(req.params.id)
    res.status(200).send(result);
}
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
    user.save(shipment).then((todo) => res.status(201).send(todo));
};


export const newShipmentValidators =[
    check("trackingNumber").notEmpty().withMessage("trackingNumber is required"),
    check("street").notEmpty().withMessage("street is required"),
    check("city").notEmpty().withMessage("city is required"),
    check("zip").notEmpty().withMessage("zip is required"),
    check("country").notEmpty().withMessage("country is required"),
    check("status").notEmpty().withMessage("status is required"),
];