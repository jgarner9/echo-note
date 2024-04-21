import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { User } from "../../models/User.mjs";
import { genWebToken } from "../token-controllers/genWebToken.mjs";

export default async function login(req, res) {
  mongoose.connect(process.env.MONGODB_URI);
  const [username, password] = [
    req.body.username,
    req.body.password,
  ];

  const userExists = await User.findOne({
    username: username,
  });

  if (userExists && bcrypt.compareSync(password, userExists.hashedPassword)) {
    res.cookie("jwt", genWebToken({ username: username }));
    res.json({
      username: username,
    });
  } else {
    res.status(409).json({ message: "Invalid login" });
  }
}
