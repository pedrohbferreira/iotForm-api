const crypto = require('crypto');

module.exports = function(app) {
  var logcontroller = {};

  var hashValue = function(value) {
    var hmac = crypto.createHmac('sha256', process.env.IOTcryptKey);
    hmac.update(value);
    return hmac.digest('hex');
  };

  logcontroller.loggin = function(req, res) {
    var LoginModel = app.models.logins;
    var ClienteModel = app.models.cliente;

    var email = req.body.email;
    var senha = req.body.senha;

    // busca o cliente
    ClienteModel.findOne({
      where: { Email: email, Senha: hashValue(senha) },
      attributes: ['Id']
    })
    .then((cliente) => {
      var hoje = new Date();
      var token = hashValue(email + senha);

      LoginModel.create({
        Token: token, DataHora: hoje, IdCliente: cliente.Id
      })
      .then((login) => {
        res.cookie('token', token);
        res.status(200).json({ idCliente: cliente.Id, token: token });
      })
      .catch(erro => res.status(404).json(erro));
    })
    .catch((error) => res.status(404).json(error));
  };

  logcontroller.loggout = function(req, res) {};

  return logcontroller;
};