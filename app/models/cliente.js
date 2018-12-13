const db = require("../../config/db");
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
      isInt: { msg: "Id deve ser um número inteiro" }, 
			min:  { args: [0], msg: "Não pode ser valor negativo" }
    },
		set: function(value) {
			this.setDataValue('Id', parseInt(value));
		}
  },

  RazaoSocial: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [10, 100], msg: "Deve ter entre 10 e 100 caracteres." } }
  },

  NomeFantasia: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: { args: [0, 100], msg: "Máximo de 100 caracteres." } }
  },

  Cnpj: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [14, 18], msg: "Mínimo de 14 máximo de 18 caracteres." } }
  },

  AreaAtuacao: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: { args: [0, 30], msg: "Máximo de 30 caracteres." } }
  },

  Site: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: { args: [0, 30], msg: "Máximo de 30 caracteres." } }
  },

  NomeContato: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 100], msg: "Máximo de 100 caracteres." } }
  },

  Cargo: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: { args: [0, 30], msg: "Cargo, máximo de 30 caracteres." } }
  },

  TelefoneComercial: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
    validate: { len: { args: [0, 14], msg: "Telefone celular, máximo de 15 caracteres." } }
  },

  TelefoneCelular: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: {args: [0, 15], msg: "Telefone celular, máximo de 15 caracteres." } }
  },

  Email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 30], msg: "Email, máximo de 30 caracteres." } }
  },

  CEP: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 9], msg: "CEP máximo de 9 caracteres." } }
  },

  Logradouro: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 100], msg: "Logradouro máximo de 100 caracteres." } }
  },

  Numero: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    validate: { isInt: true },
		set: function(value) {
			this.setDataValue('Numero', parseInt(value));
		}
  },

  Complemento: {
    type: db.Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
    validate: { len: { args: [0, 30], msg: "Complemento tem máximo de 30 caractes." } }
  },

  Estado: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 2], msg: "Sigla de estado tem máximo de 2 caracteres." } }
  },

  Cidade: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 30], msg: "Cidade deve conter até 30 caracteres." } }
  },

  Bairro: {
    type: db.Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
    validate: { len: { args: [0, 60], msg: "Bairro deve conter até 30 caracteres." } }
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
      len: { args: [8, 70], msg: "Senha deve conter entre 8 e 70 caracteres" }
    }
  },

  Status: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      isIn: { args: [[0, 1]], msg: "Status deve ser 0 ou 1" }, isInt: true
    },
		set: function(value) {
			this.setDataValue('Status', parseInt(value));
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