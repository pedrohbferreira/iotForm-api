const db = require('../../config/db');

const AtivosDevices = db.conexao.define("AtivosDevices", {
	Id: {
		type: db.Sequelize.INTEGER,
		allowNull: false,
		unique: true,
		primaryKey: true,
		autoIncrement: true,
		validate: { 
			isInt: { msg: "Id deve ser um número inteiro" }, 
			min:  { args: "Não pode ser valor negativo" }
		},
		set: function(value) {
			this.setDataValues('Id', parseInt(value))
		}
	},

	IdProjeto: {
		type: db.Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: "Proejto",
			key: "Id"
		},
		validate: { 
			isInt: { msg: "IdProjeto deve ser um número inteiro" }, 
			min:  { args: "Não pode ser valor negativo" }
		},
		set: function(value) {
			this.setDataValues('IdProjeto', parseInt(value))
		}
	},

	GeralNumeroAtivos: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GeralNumeroAtivos', parseInt(value));
		}
	},
	GeralNumeroAtivosC: { type: db.Sequelize.TEXT, allowNull: true },

	GeralValorAtivo: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GeralValorAtivo', parseInt(value));
		}
	},
	GeralValorAtivoC: { type: db.Sequelize.TEXT, allowNull: true },

	GeralValorEconomico: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GeralValorEconomico', parseInt(value));
		}
	},
	GeralValorEconomicoC: { type: db.Sequelize.TEXT, allowNull: true },
	
	GeralComplexidadeAtivo: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GeralComplexidadeAtivo', parseInt(value));
		}
	},
	GeralComplexidadeAtivoC: { type: db.Sequelize.TEXT, allowNull: true },
	
	GeralHeteroAtivo: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GeralHeteroAtivo', parseInt(value));
		}
	},
	GeralHeteroAtivoC: { type: db.Sequelize.TEXT, allowNull: true },


	PoderLogicaNegocio: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('PoderLogicaNegocio', parseInt(value));
		}
	},
	PoderLogicaNegocioC: { type: db.Sequelize.TEXT, allowNull: true },
	
	PoderProcessamento: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('PoderProcessamento', parseInt(value));
		}
	},
	PoderProcessamentoC: { type: db.Sequelize.TEXT, allowNull: true },

	PoderRequerimentos: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('PoderRequerimentos', parseInt(value));
		}
	},
	PoderRequerimentosC: { type: db.Sequelize.TEXT, allowNull: true },

	PoderGestaoLocal: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('PoderGestaoLocal', parseInt(value));
		}
	},
	PoderGestaoLocalC: { type: db.Sequelize.TEXT, allowNull: true },


	OutrosFonteEnergia: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('OutrosFonteEnergia', parseInt(value));
		}
	},
	OutrosFonteEnergiaC: { type: db.Sequelize.TEXT, allowNull: true },

	OutrosAmbiente: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('OutrosAmbiente', parseInt(value));
		}
	},
	OutrosAmbienteC: { type: db.Sequelize.TEXT, allowNull: true },


	GestaoVidaUtil: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GestaoVidaUtil', parseInt(value));
		}
	},
	GestaoVidaUtilC: { type: db.Sequelize.TEXT, allowNull: true },

	GestaoRestricoesHardware: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GestaoRestricoesHardware', parseInt(value));
		}
	},
	GestaoRestricoesHardwareC: { type: db.Sequelize.TEXT, allowNull: true },

	GestaoRestricoesSoftware: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GestaoRestricoesSoftware', parseInt(value));
		}
	},
	GestaoRestricoesSoftwareC: { type: db.Sequelize.TEXT, allowNull: true }
}, 
	{
		timestamps: false,
		freezeTableName: true,
		tableName: "AtivosDevices",
		getterMethods: {
			medias() {
				var geral = (this.GeralNumeroAtivos + this.GeralValorAtivo + this.GeralValorEconomico + this.GeralComplexidadeAtivo + this.GeralHeteroAtivo) / 5;
				var poder = (this.PoderLogicaNegocio + this.PoderProcessamento + this.PoderRequerimentos + this.PoderGestaoLocal) / 4;
				var outros = (this.OutrosFonteEnergia + this.OutrosAmbiente) / 2;
				var gestao = (this.GestaoVidaUtil + this.GestaoRestricoesHardware + this.GestaoRestricoesSoftware) / 3;
				var total = (geral + poder + outros + gestao) / 4;
				return {
					geral: parseFloat(new Number(geral).toFixed(2)),
					poderProcess: parseFloat(new Number(poder).toFixed(2)),
					outros: parsetFloat(new Number(outros).toFixed(2)),
					gestao: parseFloat(new Number(gestao).toFixed(2)),
					total: parseFloat(new Number(total).toFixed(2))
				};
			}
		}
	}
);

module.exports = function () {
	return AtivosDevices;
};