import express from "express";
import { genWebToken } from "../controllers/token-controllers/genWebToken.mjs";
import { changeUsername } from "../controllers/user-controllers/changeUsername.mjs";
import { changePassword } from "../controllers/user-controllers/changePassword.mjs";
import { deleteUser } from "../controllers/user-controllers/deleteUser.mjs";
const userRouter = express.Router();

userRouter.use((req, res, next) => genWebToken(req, res, next));

userRouter.put("/change-username", (req, res) => changeUsername(req, res));
userRouter.put("/change-password", (req, res) => changePassword(req, res));
userRouter.delete("/delete-user", (req, res) => deleteUser(req, res));

export { userRouter };
