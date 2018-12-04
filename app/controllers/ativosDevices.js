var ativosDevicesController = {
    getAtivos: function(req, res) {},
    getAtivosId: function(req, res) {},
    getAtivosIdProjeto: function(req, res) {},
    postAtivos: function(req, res) {},
    putAtivos: function (req, res) {},
    deleteAtivos: function(req, res) {}
};

module.exports = function(app) {
    ativosDevicesController.getAtivos = function(req, res) {
        var AtivosModel = app.models.ativosDevices;
        AtivosModel.findAll({})
        .then((ativos) => {
            res.status(200).json(ativos);
        })
        .catch((error) => res.status(400).json(erro));
    };

    ativosDevicesController.getAtivosId = function(req, res) {
        var AtivosModel = app.models.ativos;
        AtivosModel.findOne({
            where: {Id: parseInt(req.params.id) },
        })
        .then((ativos) => {
            if(ativos) {
                res.status(200).json(ativos);
            }
            else {
                res.status(204).end();
            }
        })
        .catch((error) => res.status(400).json(erro));
    };

    ativosDevicesController.getAtivosIdProjeto = function(req, res) {
        var AtivosModel = app.models.ativos;
        AtivosModel.findAll({
            where: { IdProjeto: parseInt(req.params.IdProjeto) }
        })
        .then((ativos) => res.status(200).json(ativos))
        .catch((erros) => res.status(400).json(erro));
    };

    ativosDevicesController.postAtivos = function(req, res) {
        var AtivosModel = app.models.ativos;

        AtivosModel.create({
            Nome: req.body.Nome, IdProjeto: parseInt(req.body.IdProjeto)
        })
        .then((ativos) => res.status(200).json(ativos))
        .catch((error) => res.status(400).json(error));
    };

    ativosDevicesController.putAtivos = function(req, res) {
        var AtivosModel = app.models.ativos;
        delete req.body.Id;
        delete req.body.IdProjeto;

        AtivosModel.update(req.body, {
            where: { Id: parseInt(req.params.id) },
            fields: Object.keys(req.body)
        })
        .then((results) => res.status(200).json(results[0]))
        .catch((error) => res.status(400).json(error));
    };
    ativosDevicesController.deleteAtivos = function(req, res) {
        var AtivosModel = app.models.ativos;
        AtivosMode.destroy({
            where: { Id: parseInt(req.params.id) },
            limit: 1, force: true
        })
        .then((count) => res.status(200).json(count))
        .catch((error) => res.status(400).json(error));
    };
    return ativosDevicesController;
} 