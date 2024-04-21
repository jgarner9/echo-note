import express from "express";
const authRouter = express.Router();

import { changeUsername } from "../controllers/changeUsername.mjs";
import { changePassword } from "../controllers/changePassword.mjs";
import { deleteUser } from "../controllers/deleteUser.mjs";
import verifyWebToken from "../controllers/verifyWebToken.mjs";

authRouter.use((req, res, next) => verifyWebToken(req, res, next));

authRouter.put("/change-username", (req, res) => changeUsername(req, res));
authRouter.put("/change-password", (req, res) => changePassword(req, res));
authRouter.delete("/delete-user", (req, res) => deleteUser(req, res));

export { authRouter };
