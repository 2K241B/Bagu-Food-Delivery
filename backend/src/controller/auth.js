import { userModel } from "../schema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(403).send({ message: "username or password wrong" });

    const token = jwt.sign({ user }, JWT_SECRET);
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60,
      })
      .json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// user: { id: user._id, email: user.email }
