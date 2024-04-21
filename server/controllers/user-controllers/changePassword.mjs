import mongoose from "mongoose";
import getUsername from "../general-controllers/getUsername.mjs";
import { User } from "../../models/User.mjs";

export async function changePassword(req, res) {
  mongoose.connect(process.env.MONGODB_URI);

  const currentUsername = getUsername(req);

  const updatedUser = await User.findOneAndUpdate(
    { username: currentUsername },
    { hashedPassword: req.body.hashedPassword },
    { new: true }
  );

  res.json({ message: updatedUser });
}
