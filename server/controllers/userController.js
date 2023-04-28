const { checkUserService } = require("../services/userService");

const userController = {
  async checkUser(req, res) {
    try {
      const serviceResult = await checkUserService(req.body);
      res.status(200).send("You are in");
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { userController };
