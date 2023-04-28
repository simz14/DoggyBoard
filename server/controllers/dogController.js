const { getDogService } = require("../services/dogService");

const dogController = {
  async getDogs(req, res) {
    try {
      const serviceResult = await getDogService();
      res.status(200).json(serviceResult);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { dogController };
