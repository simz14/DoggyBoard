const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const checkUserService = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({
    where: { email: email },
  });

  if (user) {
    const correctPassword = await bcrypt.compare(password, user.password);
    if (correctPassword) {
      return "success";
    } else {
      throw new Error("Incorrect password");
    }
  } else {
    throw new Error("Incorrect email adress");
  }
};

module.exports = { checkUserService };
