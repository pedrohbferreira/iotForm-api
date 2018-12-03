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
        validate: { len: [4, 60] }
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