var ambienteController = {
  getAmbiente: function(req, res) {},
  getAmbienteId: function(req, res) {},
  getAmbienteIdProjeto: function(req, res) {},
  postAmbiente: function(req, res) {},
  putAmbiente: function(req, res) {},
  deleteAmbiente: function(req, res) {}
};

module.exports = function(app) {
  ambienteController.getAmbiente = function(req, res) {
    var AmbienteModel = app.models.ambienteProjeto;
    AmbienteModel.findAll({})
    .then((projetos) => res.status(200).json(projetos))
    .catch((error) => res.status(400).json(error));
  };

  ambienteController.getAmbienteId = function(req, res) {
    var AmbienteModel = app.models.ambienteProjeto;
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
    var AmbienteModel = app.models.ambienteProjeto;
    AmbienteModel.findAll({
      where: { IdProejto: parseInt(req.params.idProejto) }
    })
    .then((ambientes) => res.status(200).json(ambientes))
    .catch((error) => res.status(400).json(error));
  };
  
  ambienteController.postAmbiente = function(req, res) {
    var AmbienteModel = app.models.ambienteProjeto;
    delete req.body.Id;
    AmbienteModel.create(req.body)
    .then((ambiente) => res.status(201).json(ambiente))
    .catch((error) => res.status(400).json(error));
  };

  ambienteController.putAmbiente = function(req, res) {
    var AmbienteModel = app.models.ambienteProjeto;
    delete req.body.Id;
    delete req.body.IdProjeto;

    AmbienteModel.update(req.body, {
      where: { Id: parsetInt(req.params.id) },
      fields: Object.keys(req.body)
    })
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => res.status(400).json(error));
  };

  ambienteController.deleteAmbiente = function(req, res) {
    var AmbienteModel = app.models.ambienteProjeto;
    AmbienteModel.destroy({
      where: { Id: parseInt(req.params.id) },
      limit: 1, force: true
    })
    .then((count) => res.status(200).json(count))
    .catch((error) => res.status(400).json(error));
  };

  return ambienteController;
};