module.exports = function(app) {
  var servicoController = app.controllers.servicosBackend;

  app.route("/servicos")
  .get(servicoController.getServicos)
  .post(servicoController.postServicos);

  app.route("/servicos/:id([0-9]{1,4})")
  .get(servicoController.getServicosId)
  .put(servicoController.putServicos)
  .delete(servicoController.deleteServicos);

  app.route("/servicos/projeto/:id([0-9]{1,4})")
  .get(servicoController.getServicosIdProjeto);
};