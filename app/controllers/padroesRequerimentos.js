var padroesController = {
  getPadroes: function(req, res) {},
  getPadroesId: function(req, res) {},
  postPadroes: function(req, res) {},
  getPadroesIdProjeto: function(req, res) {},
  putPadroes: function(req, res) {},
  deletePadroes: function(req, res) {}
};

module.exports = function(app) {
  padroesController.getPadroes = function(req, res) {
    var PadroesModel = app.models.padroesRequerimentos;
    PadroesModel.findAll({})
    .then((padroes) => res.status(200).json(padroes))
    .catch((error) => res.status(400).json(error));
  };

  padroesController.getPadroesId = function(req, res) {
    var PadroesModel = app.models.padroesRequerimentos;
    PadroesModel.findOne({
      where: { Id: parseInt(req.params.id) }
    })
    .then((padroes) => {
      if(padroes) {
        res.status(200).json(padroes);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };

  padroesController.getPadroesIdProjeto = function(req, res) {
    var PadroesModel = app.models.padroesRequerimentos;
    PadroesModel.findAll({
      where: { IdProjeto: parseInt(req.params.id) }
    })
    .then((padroes) => res.status(200).json(padroes))
    .catch((error) => res.status(400).json(error));
  };
  
  padroesController.postPadroes = function(req, res) {
    var PadroesModel = app.models.padroesRequerimentos;
    delete req.body.Id;

    PadroesModel.create(req.body)
    .then((padrao) => res.status(201).json(padrao))
    .catch((error) => res.status(400).json(error));
  };

  padroesController.putPadroes = function(req, res) {
    var PadroesModel = app.models.padroesRequerimentos;
    delete req.body.Id;
    delete req.body.IdProjeto;

    PadroesModel.update(req.body, {
      where: { Id: parseInt(req.params.id) },
      fields: Object.keys(req.body)
    })
    .then((padrao) => res.status(201).json(padrao[0]))
    .catch((error) => res.status(400).json(error));
  };

  padroesController.deletePadroes = function(req, res) {
    var PadroesModel = app.models.padroesRequerimentos;
    PadroesModel.destroy({
      where: { Id: parseInt(req.params.id) },
      limit: 1, force: true
    })
    .then((count) => res.status(200).json(count))
    .catch((error) => res.status(400).json(error));
  };

  return padroesController;
};