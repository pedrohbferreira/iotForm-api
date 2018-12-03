module.exports = function(app) {
	var questionarioController = app.controllers.questionarioRespostas;

	app.route("/questionario")
	.get(questionarioController.getQuestionarios)
	.post(questionarioController.postQuestionario);

	app.route("/questionario/:id")
	.get(questionarioController.getQuestionarioId)
	.put(questionarioController.putQuestionario)
	.delete(questionarioController.deleteQuestionario);
};