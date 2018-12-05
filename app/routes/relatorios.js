module.exports = function(app) {
  var relatorioController = app.controllers.relatorios;

  app.route('/relatorios/cliente/:id([0-9]{1,4})')
  .get(relatorioController.getRelatoriosIdCliente);

  app.route('/relatorios/projeto/:id([0-9]{1,4})')
  .get(relatorioController.getRelatorioIdProjeto);
};