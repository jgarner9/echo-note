import mongoose from "mongoose";
import { User } from "../models/User.mjs";
import getUsername from "./getUsername.mjs";

export async function changeUsername(req, res) {
  mongoose.connect(process.env.MONGODB_URI);

  const currentUsername = getUsername(req);
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
