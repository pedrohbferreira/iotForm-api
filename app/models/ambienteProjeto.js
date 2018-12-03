const db = require('../../config/db');

const AmbienteProjeto = db.conexao.define("AmbienteProjeto", {
    Id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true, 
        primaryKey: true,
        validate: { isInt: true }
    },
	IdProjeto: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        validate: { isInt: true },
        references: {
            model: "Projeto",
            key: "Id"
        }
    },

	AmbienteTempo: { 
        type: db.Sequelize.TINYINT, allowNull: false, 
        validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } }
    },
	AmbienteTempoC: { type: db.Sequelize.TEXT, allowNull: true },
    
    AmbienteBudget: { 
        type: db.Sequelize.TINYINT, allowNull: false, 
        validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } }
    },
	AmbienteBudgetC: { type: db.Sequelize.TEXT, allowNull: true },
    
    AmbienteFuncionais: { 
        type: db.Sequelize.TINYINT, allowNull: false, 
        validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } }
    },
	AmbienteFuncionaisC: { type: db.Sequelize.TEXT, allowNull: true },
    
    AmbienteTecnicas: { 
        type: db.Sequelize.TINYINT, allowNull: false, 
        validate: { isInt: true, isIn: { args: [[1, 2, 3, 4]], msg: "Deve estar entre 1 e 4." } }
    },
	AmbienteTecnicasC: { type: db.Sequelize.TEXT, allowNull: true }
} , {
    timestamps: false,
    freezeTableName: true,
    tableName: "AmbienteProjeto"
});

module.exports = function() {
    return AmbienteProjeto;
};