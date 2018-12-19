const db = require("../../config/db");

const QuestionarioRespostas = db.conexao.define("QuestionarioRespostas", {
	Id: {
		type: db.Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		unique: true,
		primaryKey: true,
		validate: { 
			isInt: { msg: "Id deve ser um número inteiro" }, 
			min:  { args: [0], msg: "Não pode ser valor negativo" }
		},
		set: function(value) {
			this.setDataValue('Id', parseInt(value));
		}
	},
	
	IdProjeto: {
		type: db.Sequelize.INTEGER,
		allowNull: false,
		unique: true,
		validate: { 
			isInt: { msg: "Id deve ser um número inteiro" }, 
			min:  { args: [0], msg: "Não pode ser valor negativo" }
		},
		references: {
			model: "Projeto",
			key: "Id"
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		set: function(value) {
			this.setDataValue('IdProjeto', parseInt(value));
		}
	},

	Resposta1: {
		type: db.Sequelize.INTEGER, allowNull: true,
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta1', parseInt(value));
		}
	},
	RespostaTexto1: { type: db.Sequelize.TEXT, allowNull: true },
	
	Resposta2: { 
		type: db.Sequelize.INTEGER, allowNull: true,
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta2', parseInt(value));
		}
	},
	RespostaTexto2: { type: db.Sequelize.TEXT, allowNull: true },
	
	Resposta3: { 
		type: db.Sequelize.INTEGER, allowNull: true, 
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta3', parseInt(value));
		}
	},
	RespostaTexto3: { type: db.Sequelize.TEXT, allowNull: true },
	
	Resposta4: { 
		type: db.Sequelize.INTEGER, allowNull: true, 
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta4', parseInt(value));
		}
	},
	RespostaTexto4: { type: db.Sequelize.TEXT, allowNull: true },
	
	Resposta5: { 
		type: db.Sequelize.INTEGER, allowNull: true, 
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta5', parseInt(value));
		}
	},
	RespostaTexto5: { type: db.Sequelize.TEXT, allowNull: true },
	
	Resposta6: {
		type: db.Sequelize.INTEGER, allowNull: true, 
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta6', parseInt(value));
		}
	},
	RespostaTexto6: { type: db.Sequelize.TEXT, allowNull: true },

	Resposta7: { 
		type: db.Sequelize.INTEGER, allowNull: true, 
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta7', parseInt(value));
		}
	},
	RespostaTexto7: { type: db.Sequelize.TEXT, allowNull: true },

	Resposta8: { 
		type: db.Sequelize.INTEGER, allowNull: true, 
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta8', parseInt(value));
		}
	},
	RespostaTexto8: { type: db.Sequelize.TEXT, allowNull: true },

	Resposta9: { 
		type: db.Sequelize.INTEGER, allowNull: true, 
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta9', parseInt(value));
		}
	},
	RespostaTexto9: { type: db.Sequelize.TEXT, allowNull: true },

	Resposta10: { 
		type: db.Sequelize.INTEGER, allowNull: true, 
		validate: { isInt: true, isIn: { args: [[0, 1]], msg: "Deve ser 0 ou 1." } },
		set: function (value) {
			this.setDataValue('Resposta10', parseInt(value));
		}
	},
	RespostaTexto10: { type: db.Sequelize.TEXT, allowNull: true }
}, 
	{
		timestamps: false,
		freezeTableName: true,
		tableName: "QuestionarioRespostas"
	}
);

module.exports = function () {
	return QuestionarioRespostas;
};