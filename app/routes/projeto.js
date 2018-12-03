module.exports = function(app) {
  var ProjetoController = app.controllers.projeto;

  app.route('/projeto')
  .get(ProjetoController.getProjetos)
  .post(ProjetoController.postProjeto);

  app.route('/projeto/:id([0-9]{1,4})')
  .get(ProjetoController.getProjetoId)
  .put(ProjetoController.putProjeto)
  .delete(ProjetoController.deleteProjeto);

  app.route('/projeto/cliente/:idCliente([0-9]{1,4})')
  .get(ProjetoController.getProjetosIdCliente);
};