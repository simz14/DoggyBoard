const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connections");

const Dog = sequelize.define("Dog", {
  name: { type: DataTypes.STRING, allowNull: false },
  breed: { type: DataTypes.STRING, allowNull: false },
  sex: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  color: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.STRING, allowNull: false },
  petId: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.BIGINT, allowNull: false },
  story: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = { Dog };
