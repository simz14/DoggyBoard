const { validateJWT } = require("../middlewares/validateJWT");
const { addAdoptionService } = require("../services/adoptionService");

const adoptionController = {
  async addAdoption(req, res) {
    const adoptionData = req.body;
    try {
      validateJWT(req.headers.authorization);
      try {
        const serviceResult = await addAdoptionService(adoptionData);
        res.status(200).json(serviceResult);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { adoptionController };
