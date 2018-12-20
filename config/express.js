const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const consign = require("consign");
const cors = require("../config/corsConfig");
const cookieParser = require('cookie-parser');
const basicAuth = require('../app/middleware/authenticate')();


module.exports = function () {
	var app = express();

	// configuração para recebimento de objetos json pelas rotas
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// configurações para sessão e cookie
	app.use(cookieParser());

	app.use(cors());

	// utiliza o methodOverride para requisições via navegador ou que não usam ajax
	app.use(methodOverride(function(request, respose, next) {
		if(request.body && typeof request.body === "object" && "_method" in request.body) {
			var method = request.body._method;
			delete request.body._method;
			return method;
		}
	}));

	// autentica as rotas
	app.use(function(req, res, next) {
		if(req.path.match(/^\/login$/)) {
			next();
		}
		else {
			if(!req.cookies.token){
				return res.status(400).json("Não foi identiicado o token");
			}
			else{
				return basicAuth.autenticar(req, res, next);
			}
		}
	});

	// para pegar porta do azure
	app.set("port", process.env.PORT || 3001);

	// configura o autolaod com sequência de denpedências
	consign({ cwd: "app", verbose: false })
		.include("models")
		.then("../config/loadDBdependencies.js")
		.then("middleware")
		.then("controllers")
		.then("routes")
	.into(app);

	return app;
};