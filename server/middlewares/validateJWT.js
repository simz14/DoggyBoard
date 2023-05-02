require("dotenv").config();
const jwt = require("jsonwebtoken");

const validateJWT = (passedToken) => {
  if (passedToken) {
    const token = passedToken.split(" ")[1];
    const key = process.env.SECRET_KEY;
    try {
      const valid = jwt.verify(token, key);
    } catch {
      throw new Error("Invalid token");
    }
  } else {
    throw new Error("No token provided");
  }
};

module.exports = { validateJWT };
