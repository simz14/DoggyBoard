const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  { host: process.env.HOST, dialect: "mysql", define: { timestamps: false } }
);
module.exports = { sequelize };
