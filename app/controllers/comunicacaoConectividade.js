var comConectController = {
  getComConectividades: function(req, res) {},
  postComConectividade: function(req, res) {},
  getComConectividadesId: function(req, res) {},
  putComConectividadese: function(req, res) {},
  deleteComConectividades: function(req, res) {},
  getComConectividadesIdProjeto: function(req, res) {}
};

module.exports = function(app) {
  var ComModel = app.models.comunicacaoConectividade;

  comConectController.getComConectividades = function(req, res) {
    ComModel.findAll({})
    .then((comunicacao) => {
      res.status(200).json(comunicacao);
    })
    .catch((error) => res.status(400).json(error));
  };

  comConectController.getComConectividadesId = function(req, res) {
    ComModel.findOne({
      where: { Id: parseInt(req.params.id) }
    })
    .then((comunicacao) => res.status(200).json(comunicacoes))
    .catch((error) => res.status(error));
  };

  comConectController.getComConectividadesIdProjeto = function(req, res) {
    ComModel.findAll({
      where: { IdProjeto: parseInt(req.params.id) }
    })
    .then((comunicacoes) => res.status(200).json(comunicacoes))
    .catch((error) => res.status(400).json(error));
  };
  
  comConectController.postComConectividade = function(req, res) {
    delete req.body.Id;

    ComModel.create(req.body)
    .then((comunicacao) => res.status(201).json(comunicacao))
    .catch((error) => res.status(400).json(error));
  };

  comConectController.putComConectividadese = function(req, res) {
    delete req.body.Id;
    delete req.body.IdProjeto;

    ComModel.update(req.body, {
      where: { Id: parseInt(req.params.id) },
      fields: Object.keys(req.body)
    })
    .then((comunicacao) => res.status(201).json(comunicacao[0]))
    .catch((error) => res.status(400).json(error));
  };

  comConectController.deleteComConectividades = function(req, res) {
    ComModel.destroy({
      where: { Id: parseInt(req.params.id) },
      limit: 1, force: true
    })
    .then((count) => res.status(200).json(count))
    .catch((error) => res.status(400).json(error));
  };

  return comConectController;
};