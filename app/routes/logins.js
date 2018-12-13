module.exports = function(app) {
  var controller = app.controllers.logins;

  app.route('/login')
  .post(controller.loggin);


  app.route('/logout')
  .post(controller.loggout);
};