const db = require("../../confg/db");
const crypt = require("crypto");

const Cliente = db.conexao.define("Cliente", 
{
  Id: {
    primaryKey: true,
    type: db.Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    autoIncrement: true,
    validate: {
      isInt: true
    }
  },

  RazaoSocial: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [10, 100] }
  },

  NomeFantasia: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: [0, 100] }
  },

  Cnpj: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [14, 18] }
  },

  AreaAtuacao: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: [0, 30] }
  },

  Site: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: [0, 30] }
  },

  NomeContato: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [0, 100] }
  },

  Cargo: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: [0, 30] }
  },

  TelefoneComercial: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: [0, 14] }
  },

  TelefoneCelular: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [0, 15] }
  },

  Email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [0, 30] }
  },

  CEP: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [0, 9] }
  },

  Logradouro: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [0, 100] }
  },

  Numero: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    validate: { isInt: true }
  },

  Complemento: {
    type: db.Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
    validate: { len: [0, 30] }
  },

  Estado: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [0, 2] }
  },

  Cidade: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: [0, 30] }
  },

  Senha: {
    type: db.Sequelize.STRING,
    allowNull: false,
    set: function (value) {
      var hmac = crypt.createHmac("sha256", process.env.IOTcryptKey);
      hmac.update(value);
      this.setDataValue('Senha', hmac.digest('hex'));
    },
    validate: {
      len: [8, 70]
    }
  },

  Status: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      isIn: [[0, 1]], isInt: true
    }
  }
},
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = function () {
  return Cliente;
};