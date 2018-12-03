const Cliente = require("../app/models/cliente")();
const Projeto = require("../app/models/projeto")();
const AmbienteProjeto = require("../app/models/ambienteProjeto")();
const AtivosDevices = require("../app/models/ativosDevices")();
const ComunicacaoConectividade = require("../app/models/comunicaoConectividade")();
const PadroesRequerimentos = require("../app/models/padroesRequerimentos")();
const QuestionarioRespostas = require("../app/models/questionarioRespostas")();
const ServicosBackend = require("../app/models/servicosBackend")();

module.exports = function() {
    Cliente.hasMany(Projeto, { foreignKey: "IdCliente", sourceKey: "Id" });
    Projeto.belongsTo(Cliente, { foreignKey: "IdCliente", targetKey: "Id"});
    
    Projeto.hasMany(AmbienteProjeto, { foreignKey: "IdProjeto", sourceKey: "Id" });
    Projeto.hasMany(AtivosDevices, { foreignKey: "IdProjeto", sourceKey: "Id" });
    Projeto.hasMany(ComunicacaoConectividade, { foreignKey: "IdProjeto", sourceKey: "Id" });
    Projeto.hasMany(PadroesRequerimentos, { foreignKey: "IdProjeto", sourceKey: "Id" });
    Projeto.hasMany(QuestionarioRespostas, { foreignKey: "IdProjeto", sourceKey: "Id" });
    Projeto.hasMany(ServicosBackend, { foreignKey: "IdProjeto", sourceKey: "Id" });

    AmbienteProjeto.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    AtivosDevices.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    ComunicacaoConectividade.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    PadroesRequerimentos.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    QuestionarioRespostas.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    ServicosBackend.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
};