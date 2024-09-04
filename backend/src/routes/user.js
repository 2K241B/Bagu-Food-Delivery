import { Router } from "express";
import { createUser, getUserById } from "../controller/user.js";

const user = Router();

user.post("/create", createUser);
user.get("/:id", getUserById);
export { user };
