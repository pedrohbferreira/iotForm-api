var clienteController = {
	getClientes: function (res, req) { },
	getClienteId: function (res, req) { },
	postCliente: function (req, res) { },
	putCliente: function (req, res) { },
	deleteCliente: function (req, res) { },
	getProjetos: function (res, res) { }
};

module.exports = function (app) {
	clienteController.getClientes = function (req, res) {
		var ClienteModel = app.models.cliente;
		ClienteModel.findAll({
			where: { Status: 1 },
			attributes: { exclude: ['Senha'] }
		})
		.then((clientes) => {
			res.status(200).json(clientes);
		})
		.catch((error) => res.status(400).json(error));
	};

	clienteController.getClienteId = function (req, res) {
		var ClienteModel = app.models.cliente;
		ClienteModel.findOne({
			where: { Id: parseInt(req.params.id), Status: 1 },
			attributes: { exclude: ['Senha'] }
		})
		.then((cliente) => {
			if (cliente) {
				// delete cliente.dataValues.Senha;
				res.status(200).json(cliente);
			}
			else {
				res.status(204).end();
			}
		})
		.catch((error) => res.status(400).json(error));
	};

	clienteController.postCliente = function (req, res) {
		var ClienteModel = app.models.cliente;
		ClienteModel.findOrCreate({
			where: { Email: req.body.Email, Cnpj: req.body.Cnpj },
			defaults: req.body
		})
		.spread((cliente, created) => {
			delete cliente.dataValues.Senha;
			if (created) {
				res.status(201).json(cliente);
			}
			else {
				res.status(200).json(cliente);
			}
		})
		.catch((error) => res.status(400).json(error));
	};

	clienteController.putCliente = function (req, res) {
		var ClienteModel = app.models.cliente;

		delete req.body.Senha;
		delete req.body.Id;

		ClienteModel.update(req.body, {
			where: { Id: parseInt(req.params.id) },
			fields: Object.keys(req.body)
		})
		.then((results) => {
			res.status(200).json(results);
		})
		.catch((error) => res.status(400).json(error));
	};

	// Este médoto não deleta do banco apenas seta o Status para 0
	clienteController.deleteCliente = function (req, res) {
		var ClienteModel = app.models.cliente;
		ClienteModel.update({
			Status: 0
		}, {
			where: { Id: parseInt(req.params.id) },
			fields: ['Status']
		})
		.then((results) => res.status(200).json(results))
		.catch((erro) => res.status(400).json(erro));
	};

	clienteController.getProjetos = function(req, res) {
		var ClienteModel = app.models.cliente;
		var ProjetosModel = app.models.projeto;
		var idClienteRequest = parseInt(req.params.id);
		const Sequelize = require('sequelize');

		ClienteModel.findOne({
			where: { Id: idClienteRequest },
			attributes: { exclude: ['Senha'] },
			include: [
				{ model: ProjetosModel, as: "Projetos" }
			]
		})
		.then((cliente) => {
			if(cliente) {
				res.status(200).json(cliente);
			}
			else {
				res.status(204).end();
			}
		})
		.catch((error) => res.status(400).json(error));
	};

	return clienteController;
};
