module.exports = function(app) {
  var padroesController = app.controller.padroesRequerimentos;

  app.route('/padroes')
  .get(padroesController.getPadroes)
  .post(padroesController.postPadroes);

  app.route('/padroes/:id')
  .get(padroesController.getPadroesId)
  .put(padroesController.putPadroes)
  .delete(padroesController.deletePadroes);

  app.route('/padroes/projeto/:id')
  .get(padroesController.getPadroesIdProjeto);
};