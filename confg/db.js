const Sequelize = require("sequelize");

const conexao = new Sequelize(process.env.dbIOTFormName, process.env.dbIOTFormUsername, process.env.dbIOTFormUserpwd, {
  host: process.env.dbIOTFormHost,
  dialect: "mssql",
  protocol: "tcp",
  dialectOptions: {
    encrypt: true
  },
  operatorsAliases: false
});

module.exports = { conexao, Sequelize };