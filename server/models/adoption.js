const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connections");

const Adoption = sequelize.define("Adoption", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true, isEmail: true },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
  reasonForAdopting: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  petId: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  date: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
});

module.exports = { Adoption };
