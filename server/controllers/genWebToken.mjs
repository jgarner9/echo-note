import jwt from "jsonwebtoken";

const genWebToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

export { genWebToken };
