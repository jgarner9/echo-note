import mongoose from "mongoose";
import { User } from "../models/User.mjs";
import getUsername from "../controllers/getUsername.mjs";

export async function deleteUser(req, res) {
  mongoose.connect(process.env.MONGODB_URI);
  const currentUsername = getUsername(req);
  const deletedUser = await User.deleteOne({ username: currentUsername });
  res.json({ message: deletedUser });
}
