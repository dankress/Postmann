import { check, validationResult } from "express-validator";
import { User } from "../models/user.js";

export const getUsers = async (req, res) => {

    try {
        const users = await User.find();
        if(users.length === 0){
          res.status(404).send('No users found');
        }else{
          res.status(200).send(users);
        }
        
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving users');
      }
}

export const getUsersByPostnumber = async (req, res) => {

    try {
        let result = await User.find({postnumber: req.query.postnumber});
       
       if (result.length === 0) {
         res.status(404).send('User not found');
       } else {
         res.status(200).send(result);
       }
     } catch (error) {
       console.error(error);
       res.status(500).send('Error retrieving user by number');
     }
}
export const getUsersById = async (req, res) => {


    try {
        let result = await User.findById(req.params.id);
        if (result.length === 0) {
            res.status(404).send('User not found');
          } else {
        res.status(200).send(result);
          }
        }catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user by id');
      }

}
export const deleteUsersById = async (req, res) => {
    try {
        let result = await User.findById(req.params.id);
        if (result.length === 0) {
            res.status(404).send('User not found');
          } else {
            await Packagestation.deleteOne({_id: req.params.id})
            return res.status(200).send("User deleted")
          }
        }catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user by id');
      }
};
export const addUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const user = new User({
        postnumber: req.body.postnumber,
        firstName: req.body.firstName,
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        status: req.body.status,
    });

    user.save(user).then((todo) => res.status(201).send(todo));
};

export const newUserValidators =[
  check("postnumber")
  .notEmpty().withMessage("postnumber is required")
  .isNumeric().withMessage("postnumber must be numeric")
  .isLength({ min: 5, max: 5 }).withMessage("postnumber must be 5 digits long"),

check("firstName")
  .notEmpty().withMessage("firstName is required")
  .isAlpha().withMessage("firstName must only contain alphabetic characters")
  .isLength({ max: 50 }).withMessage("firstName must be less than or equal to 50 characters"),

check("name")
  .notEmpty().withMessage("name is required")
  .isAlpha().withMessage("name must only contain alphabetic characters")
  .isLength({ max: 50 }).withMessage("name must be less than or equal to 50 characters"),

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