const { Adoption } = require("../models/adoption");

const addAdoptionService = async (adoptionData) => {
  const newAdoption = await Adoption.create(adoptionData);
  return newAdoption;
};

module.exports = { addAdoptionService };
