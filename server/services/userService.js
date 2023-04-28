const { User } = require("../models/user");

const checkUserService = async (data) => {
  const { email } = data;
  const user = await User.findOne({
    where: { email: email },
  });
  s;
  if (user) {
    return "success";
  } else {
    throw new Error("Incorrect email adress!");
  }
};

module.exports = { checkUserService };
