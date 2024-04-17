import express from "express";
const authRouter = express.Router();

import {
  createUser,
  authenticate,
  changeUsername,
  changePassword,
  deleteAccount,
} from "../controllers/auth-controllers.mjs";

//TODO: create user route
authRouter.post("/create-user", (req, res) => createUser(req, res));
//TODO: authenticate user route
authRouter.get("/authenticate", (req, res) => authenticate(req, res));
//TODO: change username route
authRouter.put("/change-username", (req, res) => changeUsername(req, res));
//TODO: change password route
authRouter.put("/change-password", (req, res) => changePassword(req, res));
//TODO: delete account
authRouter.delete("/delete-account", (req, res) => deleteAccount(req, res));

export { authRouter };
