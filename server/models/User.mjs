import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
  },
});

const User = model("User", userSchema);

export { User };
