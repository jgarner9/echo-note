import jwt from "jsonwebtoken";

export default function verifyWebToken(req, res, next) {
  const token = req.cookies.jwt;
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      res.status(401).json({ message: err });
    } else {
      next();
    }
  });
}
