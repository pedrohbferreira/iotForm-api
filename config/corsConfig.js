const cors = require('cors');

module.exports = function() {

  var whiteList = [
    'https://iotforms-app.azurewebsites.net/',
    'http://iotforms-app.azurewebsites.net/'
  ];

  var config = {
    origin: function(origin, callback) {
      if(whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      }
      else {
        callback(new Error("Origin não permitida"));
      }
    },
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  };

  return cors(config);

};