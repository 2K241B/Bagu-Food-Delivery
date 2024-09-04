import { userModel } from "../schema/user.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const createUser = async (req, res) => {
  const { email, name, password, phoneNumber, role } = req.body;
  try {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const response = await userModel.create({
          email,
          name,
          password,
          phoneNumber,
          role,
        });
        res.status(200).json(response);
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
