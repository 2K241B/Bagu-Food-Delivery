import { userModel } from "../schema/user";

export const login = async (req, res) => {
  try {
    const response = await userModel.findOne({ email: req.body.email });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
