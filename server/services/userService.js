const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkUserService = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({
    where: { email: email },
  });

  if (user) {
    const correctPassword = await bcrypt.compare(password, user.password);
    if (correctPassword) {
      const { id, firstName, lastName, email } = user;
      const key = process.env.SECRET_KEY;
      const token = jwt.sign({ id, firstName, lastName, email }, key);
      return token;
    } else {
      throw new Error("Incorrect password");
    }
  } else {
    throw new Error("Incorrect email adress");
  }
};

module.exports = { checkUserService };
