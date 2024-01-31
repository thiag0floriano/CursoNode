var http = require("http");

http.createServer(function(req, res){
    res.end("Ola");
}).listen(8786);

console.log("Servidor rodando!")