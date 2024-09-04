import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controller/user.js";

const user = Router();

user
  .post("/create", createUser)
  .get("/getUsers", getUsers)
  .get("/:id", getUserById);

export { user };
