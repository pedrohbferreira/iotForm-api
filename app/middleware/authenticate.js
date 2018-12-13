const crypto = require('crypto');
const verify = crypto.createVerify('sha256');

module.exports = function(app) {

  var auth = {};

  /**
   * Diferença entre data1 e data 2
   * @param {Date} data1 
   * @param {Date} data2 
   */
  function diffDatas(data1, data2) {
    //
  }


  
  auth.autenticar = function(req, res, next) {
    // pega o token
    // pega id
    // 
  };

  return auth;
};