import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Connect } from "./utils/db.js";
import { user } from "./src/routes/user.js";
import { authRouter } from "./src/routes/auth.js";
import { sendMail } from "./src/controller/mail.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/user", user);
app.use("/auth", authRouter);

app.get("/mail", sendMail);

app.get("/", (_, res) => {
  return res.status(200).json("hello world");
});

app.listen(PORT, () => {
  Connect(process.env.MONGODB_URI);
  console.log("listening on port " + PORT);
});
