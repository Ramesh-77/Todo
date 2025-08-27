import jwt from "jsonwebtoken";
export const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // if authorization header is missing
  if (!authHeader)
    return res.status(401).json({ message: "Authorization header missing" });
  const token = authHeader.split(" ")[1];
  // if token is missing
  if (!token) return res.status(401).json({ message: "Token missing" });
  //   if token is present verify it
  try {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    // store user id in the req object (req.user), then call next() function or passing control to next middleware
    (req.user = verifyToken.id), next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
