module.exports = function(app) {
  var comConectController = app.controllers.comunicacaoConectividade;

  app.route('/comConect')
  .get(comConectController.getComConectividades)
  .post(comConectController.postComConectividade);

  app.route('/comConect/:id')
  .get(comConectController.getComConectividadesId)
  .put(comConectController.putComConectividadese)
  .delete(comConectController.deleteComConectividades);

  app.route('/comConect/projeto/:id')
  .get(comConectController.getComConectividadesIdProjeto);
};