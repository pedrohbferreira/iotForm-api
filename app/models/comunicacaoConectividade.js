const db = require("../../config/db");

const ComunicacaoConectividade = db.conexao.define("ComunicacaoConectividade", {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
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

	LocalTecnologia: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	LocalTecnologiaC: { type: db.Sequelize.TEXT, allowNull: true },
	LocalLarguraBanda: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	LocalLarguraBandaC: { type: db.Sequelize.TEXT, allowNull: true },
	LocalMaximaLatencia: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	LocalMaximaLatenciaC: { type: db.Sequelize.TEXT, allowNull: true },

	RemotaTecnologia: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	RemotaTecnologiaC: { type: db.Sequelize.TEXT, allowNull: true },
	RemotaLarguraBanda: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	RemotaLarguraBandaC: { type: db.Sequelize.TEXT, allowNull: true },
	RemotaMaximaLatencia: { type: db.Sequelize.TINYINT, allowNull: false, validate: { isInt: true, isIn: [[1, 2, 3, 4]] } },
	RemotaMaximaLatenciaC: { type: db.Sequelize.TEXT, allowNull: true }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "ComunicacaoConectividade"
});

module.exports = function() {
    return ComunicacaoConectividade;
};