var ativosDevicesController = {
	getAtivos: function (req, res) { },
	getAtivosId: function (req, res) { },
	getAtivosIdProjeto: function (req, res) { },
	postAtivos: function (req, res) { },
	putAtivos: function (req, res) { },
	deleteAtivos: function (req, res) { }
};

module.exports = function (app) {
	var AtivosModel = app.models.ativosDevices;

	ativosDevicesController.getAtivos = function (req, res) {
		AtivosModel.findAll({})
		.then((ativos) => {
			res.status(200).json(ativos);
		})
		.catch((error) => res.status(400).json(erro));
	};

	ativosDevicesController.getAtivosId = function (req, res) {
		AtivosModel.findOne({
			where: { Id: parseInt(req.params.id) },
		})
		.then((ativos) => {
			if (ativos) {
				res.status(200).json(ativos);
			}
			else {
				res.status(204).end();
			}
		})
		.catch((error) => res.status(400).json(error));
	};

	ativosDevicesController.getAtivosIdProjeto = function (req, res) {
		AtivosModel.findAll({
			where: { IdProjeto: parseInt(req.params.id) }
		})
		.then((ativos) => res.status(200).json(ativos))
		.catch((error) => res.status(400).json(error));
	};

	ativosDevicesController.postAtivos = function (req, res) {
		var body = req.body;
		AtivosModel.findOrCreate({
			where: { IdProjeto: body.IdProjeto },
			defaults: body
		})
		.spread((ativos, created) => {
			if(created) {
				res.status(201).json(ativos);
			}
			else {
				AtivosModel.update(body, {
					where: { Id: ativos.Id },
					fields: Object.keys(body),
					limit: 1
				})
				.then((result) => {
					body.Id = ativos.Id;
					var at = AtivosModel.build(body);
					res.status(200).json(at);
				})
				.catch((error) => res.status(400).json(String(error)));
			}
		})
		.catch((error) => res.status(400).json(String(error)));
	};

	ativosDevicesController.putAtivos = function(req, res) {
		delete req.body.Id;
    delete req.body.IdProjeto;

    AtivosModel.update(req.body, {
      where: { Id: parsetInt(req.params.id) },
      fields: Object.keys(req.body)
    })
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => res.status(400).json(String(error)));
	};

	ativosDevicesController.deleteAtivos = function (req, res) {
		AtivosModel.destroy({
			where: { Id: parseInt(req.params.id) },
			limit: 1, force: true
		})
		.then((count) => res.status(200).json(count))
		.catch((error) => res.status(400).json(error));
	};
	return ativosDevicesController;
} 