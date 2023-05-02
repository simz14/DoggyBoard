const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connections");

const Donation = sequelize.define("Donation", {
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
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  amount: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
  date: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: { isNumeric: true, notEmpty: true },
  },
});

module.exports = { Donation };
