const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.htm");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send(req.params);
});



app.listen(8786, function(){
    console.log("Servidor Rodando na url http://localhost:8786");
});