const db = require('../../config/db');

const PadroesRequerimentos = db.conexao.define("PadroesRequerimentos", {
    Id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
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

	RequerimentosRegiao: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	RequerimentosRegiaoC: { type: db.Sequelize.TEXT, allowNull: true },
	RequerimentosIndustria: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	RequerimentosIndustriaC: { type: db.Sequelize.TEXT, allowNull: true },
	RequerimentosTecnologia: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	RequerimentosTecnologiaC: { type: db.Sequelize.TEXT, allowNull: true },
	PadroesTecnicos: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	PadroesTecnicosC: { type: db.Sequelize.TEXT, allowNull: true },
	PadroesFuncionais: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	PadroesFuncionaisC: { type: db.Sequelize.TEXT, allowNull: true }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "PadroesRequerimentos"
});

module.exports = function() {
    return PadroesRequerimentos;
};