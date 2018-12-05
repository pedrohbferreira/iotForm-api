var projetoController = {
  getProjetos: function(req, res) {},
  getProjetoId: function(req, res) {},
  getProjetosIdCliente: function(req, res) {},
  postProjeto: function(req, res) {},
  putProjeto: function(req, res) {},
  deleteProjeto: function(req, res) {},
  getQuestionarios: function(req, res) {},
  getAmbienteProjeto: function(req, res) {},
  getAtivosDevices: function(req, res) {},
  getComunicacaoConectividade: function(req, res) {},
  getPadroesRequerimentos: function(req, res) {},
  getServicosBackend: function(req, res) {},
  getProjetoCompleto: function(req, res) {},
  getProjetoCompletoId: function(req, res) {}
};

module.exports = function(app) {
  var ProjetoModel = app.models.projeto;

  projetoController.getProjetos = function(req, res) {
    ProjetoModel.findAll({})
    .then((projetos) => {
      res.status(200).json(projetos);
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getProjetoId = function(req, res) {
    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getProjetosIdCliente = function(req, res) {
    ProjetoModel.findAll({
      where: { IdCliente: parseInt(req.params.idCliente) }
    })
    .then((projetos) => res.status(200).json(projetos))
    .catch((error) => res.status(400).json(error));
  };

  projetoController.postProjeto = function(req, res) {
    ProjetoModel.create({
      Nome: req.body.Nome, IdCliente: parseInt(req.body.IdCliente)
    })
    .then((projeto) => res.status(201).json(projeto))
    .catch((error) => res.status(400).json(error));
  };

  projetoController.putProjeto = function(req, res) {
    delete req.body.Id;
    delete req.body.IdCliente;

    ProjetoModel.update(req.body, {
      where: { Id: parseInt(req.params.id) },
      fields: Object.keys(req.body)
    })
    .then((results) => res.status(200).json(results[0]))
    .catch((error) => res.status(400).json(error));
  };

  projetoController.deleteProjeto = function(req, res) {
    ProjetoModel.destroy({
      where: { Id: parseInt(req.params.id) },
      limit: 1, force: true
    })
    .then((count) => res.status(200).json(count))
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getQuestionarios = function(req, res) {
    var Questionario = app.models.questionarioRespostas;

    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      include: [{
        model: Questionario, as: "Questionarios"
      }]
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
  };

  projetoController.getAmbienteProjeto = function(req, res) {
    var AmbienteModel = app.models.ambienteProjeto;

    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      include: [{ model: AmbienteModel }]
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getAtivosDevices = function(req, res) {
    var AtivosModel = app.models.ativosDevices;

    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      include: [{ model: AtivosModel }]
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getComunicacaoConectividade = function(req, res) {
    var ComunicacaoModel = app.models.comunicacaoConectividade;

    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      include: [{ model: ComunicacaoModel }]
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getPadroesRequerimentos = function(req, res) {
    var PadroesModel = app.models.padroesRequerimentos;

    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      include: [{ model: PadroesModel }]
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getServicosBackend = function(req, res) {
    var ServicosModel = app.models.servicosBackend;

    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      include: [{ model: ServicosModel }]
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getProjetoCompleto = function(req, res) {
    var Questionario = app.models.questionarioRespostas;
    var AmbienteModel = app.models.ambienteProjeto;
    var AtivosModel = app.models.ativosDevices;
    var ComunicacaoModel = app.models.comunicacaoConectividade;
    var PadroesModel = app.models.padroesRequerimentos;
    var ServicosModel = app.models.servicosBackend;

    ProjetoModel.findAll({
      include: [
        { model: Questionario },
        { model: AmbienteModel },
        { model: AtivosModel },
        { model: ComunicacaoModel },
        { model: PadroesModel },
        { model: ServicosModel }
      ]
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getProjetoCompletoId = function(req, res) {
    var Questionario = app.models.questionarioRespostas;
    var AmbienteModel = app.models.ambienteProjeto;
    var AtivosModel = app.models.ativosDevices;
    var ComunicacaoModel = app.models.comunicacaoConectividade;
    var PadroesModel = app.models.padroesRequerimentos;
    var ServicosModel = app.models.servicosBackend;

    ProjetoModel.findOne({
      where: { Id: parseInt(req.params.id) },
      include: [
        { model: Questionario },
        { model: AmbienteModel },
        { model: AtivosModel },
        { model: ComunicacaoModel },
        { model: PadroesModel },
        { model: ServicosModel }
      ]
    })
    .then((projeto) => {
      if(projeto) {
        res.status(200).json(projeto);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  return projetoController;
};