var padroesController = {
  getPadroes: function(req, res) {},
  getPadroesId: function(req, res) {},
  postPadroes: function(req, res) {},
  getPadroesIdProjeto: function(req, res) {},
  putPadroes: function(req, res) {},
  deletePadroes: function(req, res) {}
};

module.exports = function(app) {
  var PadroesModel = app.models.padroesRequerimentos;

  padroesController.getPadroes = function(req, res) {
    PadroesModel.findAll({})
    .then((padroes) => res.status(200).json(padroes))
    .catch((error) => res.status(400).json(error));
  };

  padroesController.getPadroesId = function(req, res) {
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
    PadroesModel.findAll({
      where: { IdProjeto: parseInt(req.params.id) }
    })
    .then((padroes) => res.status(200).json(padroes))
    .catch((error) => res.status(400).json(error));
  };
  
  padroesController.postPadroes = function(req, res) {
    var body = req.body;
    PadroesModel.findOrCreate({
      where: { IdProjeto: body.IdProjeto },
      defaults: body
    })
    .spread((padroes, created) => {
      if(created) {
        res.status(201).json(padroes);
      }
      else {
        PadroesModel.update(body, {
          where: { Id: padroes.Id },
          fields: Object.keys(body), limit: 1
        })
        .then((result) => {
          body.Id = padroes.Id;
          var padrao = PadroesModel.build(body);
          res.status(200).json(padrao);
        })
        .catch((error) => res.status(400).json(String(error)));
      }
    })
    .catch((error) => res.status(400).json(String(error)));
  };

  padroesController.putPadroes = function(req, res) {
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
    PadroesModel.destroy({
      where: { Id: parseInt(req.params.id) },
      limit: 1, force: true
    })
    .then((count) => res.status(200).json(count))
    .catch((error) => res.status(400).json(error));
  };

  return padroesController;
};