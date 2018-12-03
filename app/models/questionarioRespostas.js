const db = require("../../confg/db");

const QuestionarioRespostas = db.conexao.define("QuestionarioRespostas", {
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

	Resposta1: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto1: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta2: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto2: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta3: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto3: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta4: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto4: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta5: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto5: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta6: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto6: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta7: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto7: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta8: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto8: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta9: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto9: { type: db.Sequelize.TEXT, allowNull: true },
	Resposta10: { type: db.Sequelize.INTEGER, allowNull: true, validate: { isInt: true, isIn: [[0, 1]] } },
	RespostaTexto10: { type: db.Sequelize.TEXT, allowNull: true }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "QuestionarioRespostas"
});

module.exports = function() {
    return QuestionarioRespostas;
};