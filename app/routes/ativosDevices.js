module.exports = function(app) {
    var ativosDevicesController = app.controllers.ativos;

    app.route('/ativosDevices')
    .get(ativosDevicesController.getAtivos)
    .post(ativosDevicesController.postAtivos);

    app.route('/ativos/:id[0-9]{1,4})')
    .get(ativosDevicesController.getAtivosId)
    .put(ativosDevicesController.putAtivos)
    .delete(ativosDevicesController.deleteAtivos);

}