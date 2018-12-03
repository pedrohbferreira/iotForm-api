module.exports = function(app) {
    var ClienteController = app.controllers.cliente;

    app.route('/cliente')
    .get(ClienteController.getClientes)
    .post(ClienteController.postCliente);

    app.route('/cliente/:id([0-9]{1,4})')
    .get(ClienteController.getClienteId)
    .put(ClienteController.putCliente)
    .delete(ClienteController.deleteCliente);
};