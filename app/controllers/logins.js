const crypto = require('crypto');
const Op = require('sequelize').Op;

module.exports = function(app) {
  var logcontroller = {};

  /**
   * Remove o T e .000Z do formato ISO String da data
   * Facilitando a busca com o like na base de dados
   * @param {Date} data 
   */
  var dataParaPesquisa = function(data) {
    var dtString = data.toISOString().split('T')[0];
    return '%' + dtString + '%';
  };

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
      if(!cliente) {
        res.status(400).json("Usuário ou senha inválidos.")
      }
      else {
        var hoje = new Date();
        var token = hashValue(email + senha + hoje.toISOString());

        LoginModel.findOrCreate({
          where: { IdCliente: cliente.Id, DataHora: { [Op.like]: dataParaPesquisa(hoje) } },
          limit: 1,
          defaults: {
            Token: token, DataHora: hoje, IdCliente: cliente.Id
          }
        })
        .spread((login, created) => {
          if(created) {
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ idCliente: cliente.Id, token: token });
          }
          else {
            LoginModel.update({
              Token: token, DataHora: hoje
            },{
              where: { Id: login.Id },
              fields: ['Token', 'DataHora'], limit: 1
            })
            .then((result) => {
              res.cookie('token', token, { httpOnly: true });
              res.status(200).json({ idCliente: cliente.Id, token: token });
            })
            .catch((error) => res.status(400).json(String(error)));
          }
        })
        .catch((error) => res.status(400).json(String(error)));
      }
    })
    .catch((error) => res.status(404).json(String(error)));
  };

  logcontroller.loggout = function(req, res) {};

  return logcontroller;
};