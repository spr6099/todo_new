const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Invalid or expired token",
      });
    }
    req.user = decoded; // Attach decoded user data to request
    next();
  });
};

module.exports = authenticateToken;
