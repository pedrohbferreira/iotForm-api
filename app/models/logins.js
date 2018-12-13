const db = require("../../config/db");
const crypt = require("crypto");

const Logins = db.conexao.define("Logins", {
  Id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    validate: { isInt: true },
    set: function(value) {
      this.setDataValue('Id', parseInt(value));
    }
  },

  IdCliente: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    validate: { isInt: true },
    set: function(value) {
      this.setDataValue('IdCliente', parseInt(value));
    },
    references: {
      model: "Cliente",
      key: "Id"
    }
  },

  DataHora: {
    type: db.Sequelize.DATE,
    allowNull: false
  },

  Token: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = function() {
  return Logins;
}