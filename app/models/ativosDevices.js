const db = require('../../confg/db');

const AtivosDevices = db.conexao.define("AtivosDevices", {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        validate: { isInt: true }
    },
	IdProjeto: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Proejto",
            key: "Id"
        },
        validate: { isInt: true }
    },

	GeralNumeroAtivos: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GeralNumeroAtivosC: { type: db.Sequelize.TEXT, allowNull: true },
	GeralValorAtivo: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GeralValorAtivoC: { type: db.Sequelize.TEXT, allowNull: true },
	GeralValorEconomico: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GeralValorEconomicoC: { type: db.Sequelize.TEXT, allowNull: true },
	GeralComplexidadeAtivo: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GeralComplexidadeAtivoC: { type: db.Sequelize.TEXT, allowNull: true },
	GeralHeteroAtivo: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GeralHeteroAtivoC: { type: db.Sequelize.TEXT, allowNull: true },

	PoderLogicaNegocio: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	PoderLogicaNegocioC: { type: db.Sequelize.TEXT, allowNull: true },
	PoderProcessamento: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	PoderProcessamentoC: { type: db.Sequelize.TEXT, allowNull: true },
	PoderRequerimentos: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	PoderRequerimentosC: { type: db.Sequelize.TEXT, allowNull: true },
	PoderGestaoLocal: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	PoderGestaoLocalC: { type: db.Sequelize.TEXT, allowNull: true },

	OutrosFonteEnergia: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	OutrosFonteEnergiaC: { type: db.Sequelize.TEXT, allowNull: true },
	OutrosAmbiente: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	OutrosAmbienteC: { type: db.Sequelize.TEXT, allowNull: true },

	GestaoVidaUtil: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GestaoVidaUtilC: { type: db.Sequelize.TEXT, allowNull: true },
	GestaoRestricoesHardware: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GestaoRestricoesHardwareC: { type: db.Sequelize.TEXT, allowNull: true },
	GestaoRestricoesSoftware: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GestaoRestricoesSoftwareC: { type: db.Sequelize.TEXT, allowNull: true }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "AtivosDevices"
});

module.exports = function() {
    return AtivosDevices;
};