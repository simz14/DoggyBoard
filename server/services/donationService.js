const { Donation } = require("../models/donation");

const getDonations = async () => {
  const donations = await Donation.findAll();
  return donations;
};

module.exports = { getDonations };
