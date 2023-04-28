const { Dog } = require("../models/dog");

const getDogService = async () => {
  const dogs = await Dog.findAll();
  return dogs;
};

module.exports = { getDogService };
