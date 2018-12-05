
module.exports = function(app) {
    const Cliente = app.models.cliente;
    const Projeto = app.models.projeto;
    const AmbienteProjeto = app.models.ambienteProjeto;
    const AtivosDevices = app.models.ativosDevices;
    const ComunicacaoConectividade = app.models.comunicacaoConectividade;
    const PadroesRequerimentos = app.models.padroesRequerimentos;
    const QuestionarioRespostas = app.models.questionarioRespostas;
    const ServicosBackend = app.models.servicosBackend;
    
    Cliente.hasMany(Projeto, { foreignKey: "IdCliente", sourceKey: "Id" });
    Projeto.belongsTo(Cliente, { foreignKey: "IdCliente", targetKey: "Id"});
    
    Projeto.hasOne(AmbienteProjeto, { foreignKey: "IdProjeto" });
    Projeto.hasOne(AtivosDevices, { foreignKey: "IdProjeto" });
    Projeto.hasOne(ComunicacaoConectividade, { foreignKey: "IdProjeto" });
    Projeto.hasOne(PadroesRequerimentos, { foreignKey: "IdProjeto" });
    Projeto.hasOne(QuestionarioRespostas, { foreignKey: "IdProjeto" });
    Projeto.hasOne(ServicosBackend, { foreignKey: "IdProjeto" });

    AmbienteProjeto.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    AtivosDevices.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    ComunicacaoConectividade.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    PadroesRequerimentos.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    QuestionarioRespostas.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
    ServicosBackend.belongsTo(Projeto, { foreignKey: "IdProjeto", targetKey: "Id" });
};