
module.exports = function(app) {
    const Cliente = app.models.cliente;
    const Projeto = app.models.projeto;
    const AmbienteProjeto = app.models.ambienteProjeto;
    const AtivosDevices = app.models.ativosDevices;
    const ComunicacaoConectividade = app.models.comunicacaoConectividade;
    const PadroesRequerimentos = app.models.padroesRequerimentos;
    const QuestionarioRespostas = app.models.questionarioRespostas;
    const ServicosBackend = app.models.servicosBackend;
    
    Cliente.hasMany(Projeto, { foreignKey: "IdCliente", sourceKey: "Id", as: "Projetos" });
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