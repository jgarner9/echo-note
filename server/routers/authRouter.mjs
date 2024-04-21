import express from "express";
const authRouter = express.Router();

import login from "../controllers/authentication-controllers/login.mjs";
import logout from "../controllers/authentication-controllers/logout.mjs";
import createUser from "../controllers/authentication-controllers/createUser.mjs";

authRouter.post("/create-user", (req, res) => createUser(req, res));
authRouter.post("/login", (req, res) => login(req, res));
authRouter.get("/logout", (req, res) => logout(req, res));

export { authRouter };
