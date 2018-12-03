const app = require("./config/express")();
const http = require("http");

http.createServer(app).listen(app.get("port"), function() {
    console.log('Servidor na porta: ' + app.get('port'));
});