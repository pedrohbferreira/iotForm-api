module.exports = function(app) {
  var ambienteController = app.controllers.ambienteProjeto;

  app.route('/ambienteProjeto')
  .get(ambienteController.getAmbiente)
  .post(ambienteController.postAmbiente);

  app.route('/ambienteProejto/:id')
  .get(ambienteController.getAmbienteId)
  .put(ambienteController.putAmbiente)
  .delete(ambienteController.deleteAmbiente);

  app.route('/ambienteProjeto/projeto/:id')
  .get(ambienteController.getAmbienteIdProjeto);
};