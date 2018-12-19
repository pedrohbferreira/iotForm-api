const Op = require('sequelize').Op;

var ambienteController = {
  getAmbiente: function(req, res) {},
  getAmbienteId: function(req, res) {},
  getAmbienteIdProjeto: function(req, res) {},
  postAmbiente: function(req, res) {},
  putAmbiente: function(req, res) {},
  deleteAmbiente: function(req, res) {}
};

module.exports = function(app) {
  var AmbienteModel = app.models.ambienteProjeto;

  ambienteController.getAmbiente = function(req, res) {
    AmbienteModel.findAll({})
    .then((projetos) => res.status(200).json(projetos))
    .catch((error) => res.status(400).json(error));
  };

  ambienteController.getAmbienteId = function(req, res) {
    AmbienteModel.findOne({
      where: { Id: parseInt(req.params.id) }
    })
    .then((ambiente) => {
      if(ambiente) {
        res.status(200).json(ambiente);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error))
  };

  ambienteController.getAmbienteIdProjeto = function(req, res) {
    AmbienteModel.findAll({
      where: { IdProjeto: parseInt(req.params.IdProjeto) }
    })
    .then((ambientes) => res.status(200).json(ambientes))
    .catch((error) => res.status(400).json(error));
  };
  
  ambienteController.postAmbiente = function(req, res) {
    var body = req.body;
    AmbienteModel.findOrCreate({
      where: { IdProjeto: body.IdProjeto },
      defaults: body
    })
    .spread((ambiente, created) => {
      if(created) {
        res.status(201).json(ambiente);
      }
      else {
        AmbienteModel.update(body, {
          where: { Id: ambiente.Id },
          fields: Object.keys(body), limit: 1
        })
        .then((result) => {
          body.Id = ambiente.Id;
          var ab = AmbienteModel.build(body);
          res.status(200).json(ab);
        })
        .catch((error) => res.status(400).json(String(error)));
      }
    })
    .catch((error) => res.status(400).json(String(error)));
  };

  ambienteController.putAmbiente = function(req, res) {
    delete req.body.Id;
    delete req.body.IdProjeto;

    AmbienteModel.update(req.body, {
      where: { Id: parsetInt(req.params.id) },
      fields: Object.keys(req.body)
    })
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => res.status(400).json(String(error)));
  };

  ambienteController.deleteAmbiente = function(req, res) {
    AmbienteModel.destroy({
      where: { Id: parseInt(req.params.id) },
      limit: 1, force: true
    })
    .then((count) => res.status(200).json(count))
    .catch((error) => res.status(400).json(error));
  };

  return ambienteController;
};