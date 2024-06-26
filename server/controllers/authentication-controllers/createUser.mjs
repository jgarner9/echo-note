import { genWebToken } from "../token-controllers/genWebToken.mjs";
import { User } from "../../models/User.mjs";
import mongoose from "mongoose";

export default async function createUser(req, res) {
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
      username: newUser.username,
    });
  } else {
    //send resource already exists error if username exists
    res.status(409);
    res.json({ message: "Username already exists" });
  }
}
