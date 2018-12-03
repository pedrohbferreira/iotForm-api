const db = require("../../config/db");

const Projeto = db.conexao.define("Projeto", {
    Id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        validate: { isInt: true }
    },
    Nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: { len: { args: [4, 60], msg: "Nome, mínimo de 4, máximo de 60 caracteres." } }
    },
    IdCliente: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Cliente",
            key: "Id"
        },
        validate: { isInt: true }
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: "Projeto"
});

module.exports = function() {
    return Projeto;
};