const { Adoption } = require("../models/adoption");

const addAdoptionService = async (adoptionData) => {
  const newAdoption = await Adoption.create(adoptionData);
  return newAdoption;
};

const getAdoptionsService = async () => {
  const adoptions = await Adoption.findAll();
  return adoptions;
};

const removeAdoptionsService = async (adoptionId) => {
  const removedAdoption = await Adoption.destroy({ where: { id: adoptionId } });
  return removedAdoption;
};
const editAdoptionService = async (adoptionData) => {
  const updatedAdoption = await Adoption.update(adoptionData, {
    where: { petId: adoptionData.petId },
  });
  return adoptionData;
};

module.exports = {
  addAdoptionService,
  getAdoptionsService,
  removeAdoptionsService,
  editAdoptionService,
};
