module.exports = function(app) {
  var ProjetoController = app.controllers.projeto;

  app.route('/projeto')
  .get(ProjetoController.getProjetos)
  .post(ProjetoController.postProjeto);

  app.route('/projeto/:id([0-9]{1,4})')
  .get(ProjetoController.getProjetoId)
  .put(ProjetoController.putProjeto)
  .delete(ProjetoController.deleteProjeto);

  app.route('/projeto/:id([0-9]{1,4})/questionarios')
  .get(ProjetoController.getQuestionarios);

  app.route('/projeto/:id([0-9]{1,4})/abProjetos')
  .get(ProjetoController.getAmbienteProjeto);

  app.route('/projeto/:id([0-9]{1,4})/atDevices')
  .get(ProjetoController.getAtivosDevices);

  app.route('/projeto/:id([0-9]{1,4})/comConect')
  .get(ProjetoController.getComunicacaoConectividade);

  app.route('/projeto/:id([0-9]{1,4})/padroesReq')
  .get(ProjetoController.getPadroesRequerimentos);

  app.route('/projeto/:id([0-9]{1,4})/servicosBackend')
  .get(ProjetoController.getServicosBackend);

  app.route('/projeto/:id/full')
  .get(ProjetoController.getProjetoCompletoId);

  app.route('/projeto/cliente/:idCliente([0-9]{1,4})')
  .get(ProjetoController.getProjetosIdCliente);

  app.route('/projeto/full')
  .get(ProjetoController.getProjetoCompleto);
};