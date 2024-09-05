import { Router } from "express";
import {
  createUser,
  getUpdateUser,
  getUserById,
  getUsers,
} from "../controller/user.js";

const user = Router();

user
  .post("/create", createUser)
  .get("/getUsers", getUsers)
  .get("/:id", getUserById)
  .put("/:id", getUpdateUser);
export { user };
