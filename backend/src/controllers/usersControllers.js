import { check, validationResult } from "express-validator";
import { User } from "../models/user.js";

//Returns all Users in database
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(404).send("No users found");
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

//Returns User with specific Postnumber
export const getUsersByPostnumber = async (req, res) => {
  try {
    let result = await User.find({ postnumber: req.query.postnumber });
    if (result.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving user by number");
  }
};

//Deletes User with specific Postnumber, if it exists in the database
export const deleteUsersByPostnumber = async (req, res) => {
  try {
    let result = await User.find({ postnumber: req.query.postnumber });
    if (result.length === 0) {
      res.status(404).send("User not found");
    } else {
      await User.deleteOne({ postnumber: req.query.postnumber });
      return res.status(200).send("User deleted");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving user by post number");
  }
};

//Patches User with specific Postnumber, if it exists in the database
export const patchUserByPostnumber = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let result = await User.find({ postnumber: req.query.postnumber });
    if (result.length === 0) {
      res.status(404).send("User not found");
    } else {
      let response = await User.findOneAndUpdate(
        { postnumber: req.query.postnumber },
        {
          $set: {
            firstName: req.query.firstName,
            name: req.query.name,
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
    res.status(500).send("Error updating user");
  }
};

//Adds a new User to the database, with the provided parameteres, if Postnumber does not already exist
export const addUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let result = await User.find({ postnumber: req.body.postnumber });
  if (result.length === 0) {
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
  } else {
    res.status(409).send("A User with this postnumber already exists");
  }
};

//Validates the provided parameteres to create a new User and checks if all needed parameteres are provided
export const newUserValidators = [
  check("postnumber")
    .notEmpty()
    .withMessage("postnumber is required")
    .isNumeric()
    .withMessage("postnumber must be numeric")
    .isLength({ min: 10, max: 10 })
    .withMessage("postnumber must be 5 digits long"),

  check("firstName")
    .notEmpty()
    .withMessage("firstName is required")
    .isAlpha()
    .withMessage("firstName must only contain alphabetic characters")
    .isLength({ max: 50 })
    .withMessage("firstName must be less than or equal to 50 characters"),

  check("name")
    .notEmpty()
    .withMessage("name is required")
    .isAlpha()
    .withMessage("name must only contain alphabetic characters")
    .isLength({ max: 50 })
    .withMessage("name must be less than or equal to 50 characters"),

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

//Validates the provided parameteres for the patch of a User
export const patchUserValidators = [
  check("firstName")
    .optional({ nullable: true })
    .isAlpha()
    .withMessage("firstName must only contain alphabetic characters")
    .isLength({ max: 50 })
    .withMessage("firstName must be less than or equal to 50 characters"),

  check("name")
    .optional({ nullable: true })
    .isAlpha()
    .withMessage("name must only contain alphabetic characters")
    .isLength({ max: 50 })
    .withMessage("name must be less than or equal to 50 characters"),

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
