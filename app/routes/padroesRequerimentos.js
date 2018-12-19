module.exports = function(app) {
  var padroesController = app.controllers.padroesRequerimentos;

  app.route('/padroes')
  .get(padroesController.getPadroes)
  .post(padroesController.postPadroes);

  app.route('/padroes/:id([0-9]{1,4})')
  .get(padroesController.getPadroesId)
  .put(padroesController.putPadroes)
  .delete(padroesController.deletePadroes);

  app.route('/padroes/projeto/:id([0-9]{1,4})')
  .get(padroesController.getPadroesIdProjeto);
};