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
    check("postnumber").notEmpty().withMessage("postnumber is required"),
    check("firstName").notEmpty().withMessage("firstName is required"),
    check("name").notEmpty().withMessage("name is required"),
    check("street").notEmpty().withMessage("street is required"),
    check("city").notEmpty().withMessage("city is required"),
    check("zip").notEmpty().withMessage("zip is required"),
    check("country").notEmpty().withMessage("country is required"),
    check("status").notEmpty().withMessage("status is required"),
]