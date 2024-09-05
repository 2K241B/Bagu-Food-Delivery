import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUpdateUser,
  getUserById,
  getUsers,
} from "../controller/user.js";

const user = Router();

user
  .post("/create", createUser)
  .get("/getUsers", getUsers)
  .get("/:id", getUserById)
  .put("/:id", getUpdateUser)
  .delete("/:id", deleteUser);
export { user };
