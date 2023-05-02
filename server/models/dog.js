const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connections");

const Dog = sequelize.define("Dog", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
  petId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
  date: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
  story: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: { notEmpty: true },
  },
});

module.exports = { Dog };
