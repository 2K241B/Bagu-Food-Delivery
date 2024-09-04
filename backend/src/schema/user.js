import { Schema, model } from "mongoose";

const UserSchema = {
  name: String,
  email: String,
  password: String,
  phonenumber: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
};

export const userModel = model("user", UserSchema);
