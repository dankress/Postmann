import { check, validationResult } from "express-validator";

const shipments = [
    {
        id: 0,
        trackingNumber: "123456789",
        street: "Erzbergerstraße 121",
        city: "Karlsruhe",
        zip: 76133,
        country: "Germany",
        status: "in transit",
        weight:"1.5kg",
    }
]
export const getShipments = (req, res) => {
    res.status(200).send(shipments);
}

export const findShipments = (req, res) => {
    let shipments = shipments.filter((shipments) => shipments.trackingNumber == req.query.trackingNumber);
    res.status(200).send(shipments);
}
export const addShipment = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let shipment = req.shipment;
    shipments.push(shipment);
    res.status(201).send('Added ${shipment.trackingNumber} to the Shipping database');
};

export const newShipmentValidators =[
    check("trackingNumber").notEmpty().withMessage("trackingNumber is required"),
    check("street").notEmpty().withMessage("street is required"),
    check("city").notEmpty().withMessage("city is required"),
    check("zip").notEmpty().withMessage("zip is required"),
    check("country").notEmpty().withMessage("country is required"),
    check("status").notEmpty().withMessage("status is required"),
]