const db = require("../../config/db");

const ComunicacaoConectividade = db.conexao.define("ComunicacaoConectividade", {
	Id: {
		type: db.Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		unique: true,
		autoIncrement: true,
		validate: { 
			isInt: { msg: "Id deve ser um número inteiro" }, 
			min:  { args: [0], msg: "Não pode ser valor negativo" }
		},
		set: function(value) {
			this.setDataValue('Id', parseInt(value))
		}
	},

	IdProjeto: {
		type: db.Sequelize.INTEGER,
		allowNull: false,
		unique: true,
		references: {
			model: "Projeto",
			key: "Id"
		},
		validate: {
			isInt: { msg: "IdProjeto deve ser um número inteiro" }, 
			min:  { args: [0], msg: "Não pode ser valor negativo" }
		},
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
		set: function(value) {
			this.setDataValue('IdProjeto', parseInt(value))
		}
	},

	LocalTecnologia: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('LocalTecnologia', parseInt(value))
		}
	},
	LocalTecnologiaC: { type: db.Sequelize.TEXT, allowNull: true },
	LocalLarguraBanda: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('LocalLarguraBanda', parseInt(value))
		}
	},
	LocalLarguraBandaC: { type: db.Sequelize.TEXT, allowNull: true },
	LocalMaximaLatencia: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('LocalMaximaLatencia', parseInt(value))
		}
	},
	LocalMaximaLatenciaC: { type: db.Sequelize.TEXT, allowNull: true },

	RemotaTecnologia: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('RemotaTecnologia', parseInt(value))
		}
	},
	RemotaTecnologiaC: { type: db.Sequelize.TEXT, allowNull: true },
	RemotaLarguraBanda: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('RemotaLarguraBanda', parseInt(value))
		}
	},
	RemotaLarguraBandaC: { type: db.Sequelize.TEXT, allowNull: true },
	RemotaMaximaLatencia: {
		type: db.Sequelize.TINYINT, allowNull: false,
		validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } },
		set: function(value) {
			this.setDataValue('RemotaMaximaLatencia', parseInt(value))
		}
	},
	RemotaMaximaLatenciaC: { type: db.Sequelize.TEXT, allowNull: true }
}, 
	{
		timestamps: false,
		freezeTableName: true,
		tableName: "ComunicacaoConectividade",
		getterMethods: {
			Medias() {
				var local = (this.LocalTecnologia + this.LocalLarguraBanda + this.LocalMaximaLatencia) / 3;
				var remota = (this.RemotaTecnologia + this.RemotaLarguraBanda + this.RemotaMaximaLatencia) / 3;
				var total = (local + remota) / 2;
				return {
					Local: parseFloat(new Number(local).toFixed(2)),
					Remota: parseFloat(new Number(remota).toFixed(2)),
					Total: parseFloat(new Number(total).toFixed(2))
				};
			}
		}
	}
);

module.exports = function () {
	return ComunicacaoConectividade;
};