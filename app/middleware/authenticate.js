const crypto = require('crypto');
const verify = crypto.createVerify('sha256');
const moment = require('moment');
const LoginModel = require('../models/logins');

module.exports = function(app) {

  var auth = {};

  /**
   * Diferença entre data1 e data atual
   * @param {Date} data1 
   * @returns {number}
   */
  function diffDatas(data1) {
    var dataOrigem = moment(data1, "YYYY-MM-DD HH:mm:ss");
    var hoje = moment(new Date(), "YYYY-MM-DD HH:mm:ss");
    return hoje.diff(dataOrigem, 'seconds');
  }

  /**
   * Se idClinte for 0 permite
   * @param {number} idCliente 
   * @param {string} method
   */
  function authRoutes(idCliente, method, route) {
    var negatedRotues = ['/cliente'];
    var methods = ['GET', 'POST', 'PUT', 'DELETE'];
    console.log(route);
    if(idCliente != 0) {
      if(negatedRotues.indexOf(route) >= 0 && methods.indexOf(method) >= 0) {
        return false;
      }
    }
    return true;
  }

  var hashValue = function(value) {
    var hmac = crypto.createHmac('sha256', process.env.IOTcryptKey);
    hmac.update(value);
    return hmac.digest('hex');
  };
  
  auth.autenticar = function(req, res, next) {
    // pega o token
    var token = req.cookies.token;
    var loginModel = LoginModel();

    // busca no login pelo token
    loginModel.findOne({
      where: { Token: token }
    })
    .then((login) => {
      if(!login) {
        res.status(400).json("Deve-se atutenticar!");
      }
      else if(authRoutes(login.IdCliente, req.method, req.path)) {
        console.log('gera novo token');
        var agora = new Date();
        var novoToken = hashValue(token + '' + agora.getTime());

        if(diffDatas(login.DataHora) > (24* 60 * 60)) {
          loginModel.update({
            Token: novoToken, DataHora: agora
          },{
            where: { Id: login.Id }
          })
          .then((result) => {
            console.log('atualiza e segue');
            res.cookie('token', novoToken, { httpOnly: true });
            next();
          })
          .catch((error) => {
            console.log('erro aqui');
            res.status(400).json(String(error))
          });
        }
        else {
          next();
        }
      }
      else {
        throw Error('Usuário não pode acessar esta rota!');
      }
    })
    .catch((error) => {
      res.status(400).json(String(error));
      console.log('tem que altenticar as rotas');
    });
  };

  return auth;
};