var relatorioController = {
  getRelatoriosIdCliente: function(req, res) {},
  getRelatorioIdProjeto: function(req, res) {},
};

module.exports = function(app) {
  var ClienteModel = app.models.cliente,
      ProjetoModel = app.models.projeto,
      AmbienteModel = app.models.ambienteProjeto,
      AtivosModel = app.models.ativosDevices,
      ComConectModel = app.models.comunicacaoConectividade,
      ServicosBackend = app.models.servicosBackend,
      QuestionarioModel = app.models.questionarioRespostas,
      PadroesModel = app.models.padroesRequerimentos;
  
  relatorioController.getRelatoriosIdCliente = function(req, res) {
    
    ClienteModel.findOne({
      where: { Id: parseInt(req.params.id) },
      attributes: { exclude:['Senha'] },
      include: [{
        model: ProjetoModel,
        include: [
          { model: QuestionarioModel }, { model: AmbienteModel }, { model: AtivosModel },
          { model: ComConectModel }, { model: ServicosBackend }, { model: PadroesModel }
        ]
      }]
    })
    .then((relatorio) => {
      if(relatorio) {
        res.status(200).json(relatorio);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.json(error));

  };

  relatorioController.getRelatorioIdProjeto = function(req, res) {
    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      include: [
        { model: QuestionarioModel }, { model: AmbienteModel }, { model: AtivosModel },
        { model: ComConectModel }, { model: ServicosBackend }, { model: PadroesModel } 
      ]
    })
    .then((relatorio) => {
      if(relatorio) {
        res.status(200).json(relatorio);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  return relatorioController;
};