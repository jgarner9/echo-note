import jwt from "jsonwebtoken";

const webToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

export { webToken };
