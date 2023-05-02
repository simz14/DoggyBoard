const { Dog } = require("../models/dog");

const getDogService = async () => {
  const dogs = await Dog.findAll();
  return dogs;
};

const addDogService = async (dogData) => {
  const newDog = await Dog.create(dogData);
  return newDog;
};

const editDogService = async (dogData) => {
  const updatedDog = await Dog.update(dogData, {
    where: { id: dogData.id },
  });
  return dogData;
};

module.exports = { getDogService, addDogService, editDogService };
