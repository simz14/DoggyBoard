const { validateJWT } = require("../middlewares/validateJWT");
const {
  addAdoptionService,
  getAdoptionsService,
  removeAdoptionsService,
  editAdoptionService,
} = require("../services/adoptionService");

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

  async getAdoptions(req, res) {
    try {
      validateJWT(req.headers.authorization);
      try {
        const serviceResult = await getAdoptionsService();
        res.status(200).json(serviceResult);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async removeAdoptions(req, res) {
    const adoptionId = req.body.id;
    try {
      validateJWT(req.headers.authorization);
      try {
        const serviceResult = await removeAdoptionsService(adoptionId);
        res.status(200).json(serviceResult);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async editAdoption(req, res) {
    const updatedAdoption = req.body;
    try {
      validateJWT(req.headers.authorization);
      try {
        const serviceResult = await editAdoptionService(updatedAdoption);
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
