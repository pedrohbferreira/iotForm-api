module.exports = function(app) {
  var comConectController = app.controllers.comunicacaoConectividade;

  app.route('/comConect')
  .get(comConectController.getComConectividades)
  .post(comConectController.postComConectividade);

  app.route('/comConect/:id([0-9]{1,4})')
  .get(comConectController.getComConectividadesId)
  .put(comConectController.putComConectividadese)
  .delete(comConectController.deleteComConectividades);

  app.route('/comConect/projeto/:id([0-9]{1,4})')
  .get(comConectController.getComConectividadesIdProjeto);
};