const { validateJWT } = require("../middlewares/validateJWT");
const { getDonations } = require("../services/donationService");

const donationCotroller = {
  async getDonations(req, res) {
    try {
      validateJWT(req.headers.authorization);
      try {
        const serviceResult = await getDonations();
        res.status(200).json(serviceResult);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { donationCotroller };
