import jwt from "jsonwebtoken";

export default function getUsername(req) {
  const token = req.cookies.jwt;
  const currentUsername = jwt.verify(token, process.env.JWT_SECRET).username;
  return currentUsername;
}
