module.exports = function(app) {
	var questionarioController = app.controllers.questionarioRespostas;

	app.route("/questionario")
	.get(questionarioController.getQuestionarios)
	.post(questionarioController.postQuestionario);

	app.route("/questionario/:id([0-9]{1,4})")
	.get(questionarioController.getQuestionarioId)
	.put(questionarioController.putQuestionario)
	.delete(questionarioController.deleteQuestionario);

	app.route(questionarioController.getQuestionarioIdProjeto)
};