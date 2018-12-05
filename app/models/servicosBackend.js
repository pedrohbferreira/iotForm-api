const db = require('../../config/db');

const ServicosBackend = db.conexao.define("ServicosBackend", {
	Id: {
		type: db.Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		unique: true,
		autoIncrement: true,
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

	GeralEstrategiaAplicacao: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GeralEstrategiaAplicacao', parseInt(value))
		}
	},
	GeralEstrategiaAplicacaoC: { type: db.Sequelize.TEXT, allowNull: true },
	
	GeralComplexidadeNegocio: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GeralComplexidadeNegocio', parseInt(value))
		}
	},
	GeralComplexidadeNegocioC: { type: db.Sequelize.TEXT, allowNull: true },
	
	GeralIntegracaoBackend: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GeralIntegracaoBackend', parseInt(value))
		}
	},
	GeralIntegracaoBackendC: { type: db.Sequelize.TEXT, allowNull: true },
	
	GestaoVolumeDados: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GestaoVolumeDados', parseInt(value))
		}
	},
	GestaoVolumeDadosC: { type: db.Sequelize.TEXT, allowNull: true },
	
	GestaoVariedadeDados: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GestaoVariedadeDados', parseInt(value))
		}
	},
	GestaoVariedadeDadosC: { type: db.Sequelize.TEXT, allowNull: true },
	
	GestaoVariabilidadeDados: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GestaoVariabilidadeDados', parseInt(value))
		}
	},
	GestaoVariabilidadeDadosC: { type: db.Sequelize.TEXT, allowNull: true },
	GestaoAnalytics: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('GestaoAnalytics', parseInt(value))
		}
	},
	GestaoAnalyticsC: { type: db.Sequelize.TEXT, allowNull: true }
}, 
	{
		timestamps: false,
		freezeTableName: true,
		tableName: "ServicosBackend",
		getterMethods: {
			Medias() {
				var geral = (this.GeralEstrategiaAplicacao + this.GeralComplexidadeNegocio + this.GeralIntegracaoBackend) / 3;
				var gestao = (this.GestaoVolumeDados + this.GestaoVariabilidadeDados + this.GestaoAnalytics) / 3;
				var total = (geral + gestao) / 2;
				return {
					Geral: parseFloat(new Number(geral).toFixed(2)),
					Gestao: parseFloat(new Number(gestao).toFixed(2)),
					Total: parseFloat(new Number(total).toFixed(2))
				};
			}
		}
	}
);

module.exports = function () {
	return ServicosBackend;
};