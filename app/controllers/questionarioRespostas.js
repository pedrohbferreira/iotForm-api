var questionarioRespostas = {
	getQuestionarios: function (req, res) { },
	getQuestionarioId: function (req, res) { },
	getQuestionarioIdProjeto: function(req, res) {},
	postQuestionario: function (req, res) { },
	putQuestionario: function (req, res) { },
	deleteQuestionario: function (req, res) { }
};

module.exports = function (app) {
	questionarioRespostas.getQuestionarios = function (req, res) {
		var QuestionariosModel = app.models.questionarioRespostas;
		QuestionariosModel.findAll({})
		.then((questionarios) => res.status(200).json(questionarios))
		.catch((error) => {
			if(!Object.keys(error).length) {
				error = String(error);
			}
			res.status(400).json(error);
		});
	};

	questionarioRespostas.getQuestionarioId = function (req, res) {
		var QuestionariosModel = app.models.questionarioRespostas;
		QuestionariosModel.findOne({
			where: { Id: parseInt(req.params.id) }
		})
		.then((questionario) => {
			if (questionario) {
				res.status(200).json(questionario);
			}
			else {
				res.status(204).end();
			}
		});
	};
	
	questionarioRespostas.getQuestionarioIdProjeto = function(req, res) {
		var QuestionariosModel = app.models.questionarioRespostas;
		QuestionariosModel.findAll({
			where: { IdProjeto: parseInt(req.params.id) }
		})
		.then((questionarios) => res.status(200).json(questionarios))
		.catch((error) => res.status(400).json(error));
	};

	questionarioRespostas.postQuestionario = function (req, res) {
		var QuestionariosModel = app.models.questionarioRespostas;
		delete req.body.Id;
		QuestionariosModel.create(req.body)
		.then((questionario) => res.status(201).json(questionario))
		.catch((error) => res.status(400).json(error));
	};

	questionarioRespostas.putQuestionario = function (req, res) {
		var QuestionariosModel = app.models.questionarioRespostas;
		
		delete req.body.Id;
		delete req.body.IdProjeto;

		QuestionariosModel.update(req.body, {
			where: { Id: parseInt(req.params.id) },
			fields: Object.keys(req.body)
		})
		.then((results) => res.status(200).json(results[0]))
		.catch((error) => res.status(400).json(error));
	};

	questionarioRespostas.deleteQuestionario = function (req, res) { 
		var QuestionariosModel = app.models.questionarioRespostas;
		QuestionariosModel.destroy({
			where: { Id: parseInt(req.params.id) },
			limit: 1, force: true
		})
		.then((count) => res.status(200).json(count))
		.catch((error) => res.status(400).json(error));
	};

	return questionarioRespostas;
};