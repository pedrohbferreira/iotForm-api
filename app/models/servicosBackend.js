const db = require('../../confg/db');

const ServicosBackend = db.conexao.define("ServicosBackend", {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        validate: { isInt: true }
    },
	IdProjeto: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Projeto",
            key: "Id"
        },
        validate: { isInt: true }
    },

	GeralEstrategiaAplicacao: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GeralEstrategiaAplicacaoC: { type: db.Sequelize.TEXT, allowNull: true },
	GeralComplexidadeNegocio: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GeralComplexidadeNegocioC: { type: db.Sequelize.TEXT, allowNull: true },
	GeralIntegracaoBackend: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GeralIntegracaoBackendC: { type: db.Sequelize.TEXT, allowNull: true },
	GestaoVolumeDados: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GestaoVolumeDadosC: { type: db.Sequelize.TEXT, allowNull: true },
	GestaoVariedadeDados: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GestaoVariedadeDadosC: { type: db.Sequelize.TEXT, allowNull: true },
	GestaoVariabilidadeDados: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GestaoVariabilidadeDadosC: { type: db.Sequelize.TEXT, allowNull: true },
	GestaoAnalytics: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	GestaoAnalyticsC: { type: db.Sequelize.TEXT, allowNull: true }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "ServicosBackend"
});

module.exports = function() {
    return ServicosBackend;
};