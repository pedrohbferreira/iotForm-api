var projetoController = {
  getProjetos: function(req, res) {},
  getProjetoId: function(req, res) {},
  getProjetosIdCliente: function(req, res) {},
  postProjeto: function(req, res) {},
  putProjeto: function(req, res) {},
  deleteProjeto: function(req, res) {}
};

module.exports = function(app) {
  projetoController.getProjetos = function(req, res) {
    var ProjetoModel = app.model.projeto;
    ProjetoModel.findAll({})
    .then((projetos) => {
      res.status(200).json(projetos);
    })
    .catch((error) => res.status(400).json(error));
  };

  projetoController.getProjetoId = function(req, res) {
    var ProjetoModel = app.models.projeto;
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
    var ProjetoModel = app.models.projeto;
    ProjetoModel.findAll({
      where: { IdCliente: parseInt(req.params.idCliente) }
    })
    .then((projetos) => res.status(200).json(projetos))
    .catch((error) => res.status(400).json(error));
  };

  projetoController.postProjeto = function(req, res) {
    var ProjetoModel = app.models.projeto;

    ProjetoModel.create({
      Nome: req.body.Nome, IdCliente: parseInt(req.body.IdCliente)
    })
    .then((projeto) => res.status(201).json(projeto))
    .catch((error) => res.status(400).json(error));
  };

  projetoController.putProjeto = function(req, res) {
    var ProjetoModel = app.models.projeto;
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
    var ProjetoModel = app.models.projeto;
    ProjetoModel.destroy({
      where: { Id: parseInt(req.params.id) },
      limit: 1, force: true
    })
    .then((count) => res.status(200).json(count))
    .catch((error) => res.status(400).json(error));
  };

  return projetoController;
};