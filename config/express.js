const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const consign = require("consign");
const cors = require("cors");


module.exports = function () {
	var app = express();

	// configuração para recebimento de objetos json pelas rotas
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// utiliza o methodOverride para requisições via navegador ou que não usam ajax
	app.use(methodOverride(function(request, respose, next) {
		if(request.body && typeof request.body === "object" && "_method" in request.body) {
			var method = request.body._method;
			delete request.body._method;
			return method;
		}
	}));

	// para pegar porta do azure
	app.set("port", process.env.PORT || 3001);

	// configura o autolaod com sequência de denpedências
	consign({ cwd: "app", verbose: false })
		.include("models")
		.then("../config/loadDBdependencies.js")
		.then("controllers")
		.then("routes")
	.into(app);

	return app;
};