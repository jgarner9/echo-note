import { User } from "../models/User.mjs";
import mongoose from "mongoose";

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

    res.json({ user: newUser });
  } else {
    res.status(401);
    res.send()
  }
}
export function authenticate(req, res) {}
export function changeUsername(req, res) {}
export function changePassword(req, res) {}
export function deleteAccount(req, res) {}
