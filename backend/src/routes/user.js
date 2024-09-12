import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUpdateUser,
  getUserById,
  getUsers,
} from "../controller/user.js";
import { checkToken } from "../middleware/checkToken.js";
import { checkRole } from "../middleware/checkRole.js";

const user = Router();

user
  .post("/create", createUser)
  .get("/getUsers", checkToken, checkRole, getUsers)
  .get("/:id", getUserById)
  .put("/:id", getUpdateUser)
  .delete("/:id", deleteUser);
export { user };
