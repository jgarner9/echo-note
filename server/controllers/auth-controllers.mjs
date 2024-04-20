import { User } from "../models/User.mjs";
import { genWebToken } from "./genWebToken.mjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
  mongoose.connect(process.env.MONGODB_URI);

  const userExists = (await User.findOne({ username: req.body.username }))
    ? true
    : false;

  if (!userExists) {
    const newUser = await User.create({
      username: req.body.username,
      hashedPassword: req.body.hashedPassword,
    });

    res.cookie("jwt", genWebToken({ username: newUser.username }));
    res.json({
      user: newUser,
    });
  } else {
    //send resource already exists error if username exists
    res.status(409);
    res.send();
  }
}
export async function changeUsername(req, res) {
  mongoose.connect(process.env.MONGODB_URI);

  const token = req.cookies.jwt;
  const currentUsername = jwt.verify(token, process.env.JWT_SECRET).username;
  const newUsername = req.body.username;

  if (!(await User.findOne({ username: currentUsername }))) {
    res.status(409).json({ message: "username already taken" });
  } else {
    const updatedUser = await User.findOneAndUpdate(
      { username: currentUsername },
      { username: newUsername }
    );
    res.json({ message: updatedUser });
  }
}
export function changePassword(req, res) {}
export function deleteAccount(req, res) {}
