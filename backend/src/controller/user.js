import { userModel } from "../schema/user.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const createUser = async (req, res) => {
  const { email, name, password, phoneNumber, role } = req.body;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const response = await userModel.create({
      email,
      name,
      password: hash,
      phoneNumber,
      role,
    });
    res.status(200).send(response);
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

export const getUsers = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export const getUpdateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  try {
    const response = await userModel.findByIdAndUpdate(id, updatedUser);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
