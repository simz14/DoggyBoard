const { Adoption } = require("../models/adoption");

const addAdoptionService = async (adoptionData) => {
  const newAdoption = await Adoption.create(adoptionData);
  return newAdoption;
};

const getAdoptionsService = async () => {
  const adoptions = await Adoption.findAll();
  return adoptions;
};

module.exports = { addAdoptionService, getAdoptionsService };
