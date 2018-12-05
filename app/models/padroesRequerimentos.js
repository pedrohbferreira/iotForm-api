const db = require('../../config/db');

const PadroesRequerimentos = db.conexao.define("PadroesRequerimentos", {
	Id: {
		type: db.Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false,
		validate: { 
			isInt: { msg: "Id deve ser um número inteiro" }, 
			min:  { args: "Não pode ser valor negativo" }
		},
		set: function(value) {
			this.setDataValue('Id', parseInt(value))
		}
	},

	IdProjeto: {
		type: db.Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: "Projeto",
			key: "Id"
		},
		validate: { 
			isInt: { msg: "IdProjeto deve ser um número inteiro" }, 
			min:  { args: "Não pode ser valor negativo" }
		},
		set: function(value) {
			this.setDataValue('IdProjeto', parseInt(value))
		}
	},

	RequerimentosRegiao: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('RequerimentosRegiao', parseInt(value))
		}
	},
	RequerimentosRegiaoC: { type: db.Sequelize.TEXT, allowNull: true },
	RequerimentosIndustria: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('RequerimentosIndustria', parseInt(value))
		}
	},
	RequerimentosIndustriaC: { type: db.Sequelize.TEXT, allowNull: true },
	RequerimentosTecnologia: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('RequerimentosTecnologia', parseInt(value))
		}
	},
	RequerimentosTecnologiaC: { type: db.Sequelize.TEXT, allowNull: true },
	PadroesTecnicos: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('PadroesTecnicos', parseInt(value))
		}
	},
	PadroesTecnicosC: { type: db.Sequelize.TEXT, allowNull: true },
	PadroesFuncionais: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('PadroesFuncionais', parseInt(value))
		}
	},
	PadroesFuncionaisC: { type: db.Sequelize.TEXT, allowNull: true }
}, 
	{
		timestamps: false,
		freezeTableName: true,
		tableName: "PadroesRequerimentos",
		getterMethods: {
			medias() {
				var requerimentos = (this.RequerimentosRegiao + this.RequerimentosIndustria + this.RequerimentosTecnologia) / 3;
				var padroes = (this.PadroesFuncionais + this.PadroesTecnicos) / 2;
				var total = (requerimentos + padroes) / 2;
				return {
					requerimentos: parseFloat(new Number(requerimentos).toFixed(2)),
					padroes: parseFloat(new Number(padroes).toFixed(2))
				};
			}
		}
	}
);

module.exports = function () {
	return PadroesRequerimentos;
};