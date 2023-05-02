const { validateJWT } = require("../middlewares/validateJWT");
const { getDogService, addDogService } = require("../services/dogService");

const dogController = {
  async getDogs(req, res) {
    try {
      validateJWT(req.headers.authorization);
      try {
        const serviceResult = await getDogService();
        res.status(200).json(serviceResult);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async addDog(req, res) {
    const dogData = req.body;
    try {
      validateJWT(req.headers.authorization);
      try {
        const serviceResult = await addDogService(dogData);
        res.status(200).json(serviceResult);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { dogController };
