import mongoose from "mongoose";
import { User } from "../../models/User.mjs";
import { genWebToken } from "../token-controllers/genWebToken.mjs";

export default async function login(req, res) {
  mongoose.connect(process.env.MONGODB_URI);
  const [username, hashedPassword] = [
    req.body.username,
    req.body.hashedPassword,
  ];

  const userExists = await User.findOne({
    username: username,
    hashedPassword: hashedPassword,
  });

  if (userExists) {
    res.cookie("jwt", genWebToken({ username: username }));
    res.json({
      username: username,
    });
  } else {
    res.status(409).res.json({ message: "Invalid login" });
  }
}
