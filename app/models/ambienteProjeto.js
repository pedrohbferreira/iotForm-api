const db = require('../../config/db');

const AmbienteProjeto = db.conexao.define("AmbienteProjeto", {
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
		set: function (value) {
			this.setDataValue('Id', parseInt(value));
		}
	},

	IdProjeto: {
		type: db.Sequelize.INTEGER,
		allowNull: false,
		validate: {
			isInt: { msg: "IdProjeto deve ser um número inteiro" }, 
			min:  { args: [0], msg: "Não pode ser valor negativo" }
		},
		references: {
			model: "Projeto",
			key: "Id"
		},
		set: function (value) {
			this.setDataValue('IdProjeto', parseInt(value));
		}
	},

	AmbienteTempo: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function (value) {
			this.setDataValue('AmbienteTempo', parseInt(value));
		}
	},
	AmbienteTempoC: { type: db.Sequelize.TEXT, allowNull: true },

	AmbienteBudget: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function (value) {
			this.setDataValue('AmbienteBudget', parseInt(value));
		}
	},
	AmbienteBudgetC: { type: db.Sequelize.TEXT, allowNull: true },

	AmbienteFuncionais: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function (value) {
			this.setDataValue('AmbienteFuncionais', parseInt(value));
		}
	},
	AmbienteFuncionaisC: { type: db.Sequelize.TEXT, allowNull: true },

	AmbienteTecnicas: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function (value) {
			this.setDataValue('AmbienteTecnicas', parseInt(value));
		}
	},
	AmbienteTecnicasC: { type: db.Sequelize.TEXT, allowNull: true }
}, 
	{
		timestamps: false,
		freezeTableName: true,
		tableName: "AmbienteProjeto",
		getterMethods: {
			Medias() {
				var media = (this.AmbienteTempo + this.AmbienteBudget + this.AmbienteFuncionais + this.AmbienteTecnicas) / 4;
				var ambiente = total =  parseFloat(new Number(media).toFixed(2));
				return { 
					Ambiente: ambiente,
					Total: total
				};
			}
		}
	}
);

module.exports = function () {
	return AmbienteProjeto;
};