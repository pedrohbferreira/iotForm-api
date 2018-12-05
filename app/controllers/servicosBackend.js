var servicosController = {
  getServicos: function(req, res) {},
  getServicosId: function(req, res) {},
  getServicosIdProjeto: function(req, res) {},
  postServicos: function(req, res) {},
  putServicos: function(req, res) {},
  deleteServicos: function(req, res) {}
};

module.exports = function(app) {
  var ServicosModel = app.models.servicosBackend;
  
  servicosController.getServicos = function(req, res) {
    ServicosModel.findAll({})
    .then((servicos) => res.status(200).json(servicos))
    .catch((error) => res.status(400).json(error));
  };
  
  servicosController.getServicosId = function(req, res) {
    ServicosModel.findOne({
      where: { Id: parseInt(req.params.id) }
    })
    .then((servico) => {
      if(servico) {
        res.status(200).json(servico);
      }
      else {
        res.status(204).end();
      }
    })
    .catch((error) => res.status(400).json(error));
  };
  
  servicosController.getServicosIdProjeto = function(req, res) {
    ServicosModel.findAll({
      where: { IdProjeto: parseInt(req.params.id) }
    })
    .then((servicoes) => res.status(200).json(servicoes))
    .catch((error) => res.status(400).json(error));
  };
  
  servicosController.postServicos = function(req, res) {
    delete req.body.Id;
    
    ServicosModel.create(req.body)
    .then((servico) => res.status(201).json(servico))
    .catch((error) => res.status(400).json(error));
  };
  
  servicosController.putServicos = function(req, res) {
    delete req.body.Id;
    delete req.body.IdProjeto;
    
    ServicosModel.update(req.body, {
      where: { Id: parseInt(req.params.id) },
      fields: Object.keys(req.body)
    })
    .then((result) => req.status(200).json(result[0]))
    .catch((error) => res.status(400).json(error));
  };
  
  servicosController.deleteServicos = function(req, res) {
    ServicosModel.destroy({
      where: { Id: parseInt(req.params.id) },
      limit: 1, force: true
    })
    .then((count) => res.status(200).json(count))
    .catch((error) => res.status(400).json(error));
  };

  return servicosController;
};