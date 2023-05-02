const { Dog } = require("../models/dog");

const getDogService = async () => {
  const dogs = await Dog.findAll();
  return dogs;
};

const addDogService = async (dogData) => {
  const newDog = await Dog.create(dogData);
  return newDog;
};

module.exports = { getDogService, addDogService };
