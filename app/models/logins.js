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
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  },

  DataHora: {
    type: db.Sequelize.STRING,
    allowNull: false,
    set: function(data) {
      var dtString =  data.toLocaleDateString() + ' ' + data.toLocaleTimeString();
      this.setDataValue('DataHora', dtString);
    }
  },

  Token: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = function() {
  return Logins;
}