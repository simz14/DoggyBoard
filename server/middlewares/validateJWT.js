require("dotenv").config();
const jwt = require("jsonwebtoken");

const validateJWT = (passedToken) => {
  const token = passedToken.split(" ")[1];
  const key = process.env.SECRET_KEY;
  try {
    const valid = jwt.verify(token, key);
  } catch {
    throw new Error("Invalid token");
  }
};

module.exports = { validateJWT };
