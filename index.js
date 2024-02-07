
// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/html/index.html");
// });

// app.get("/sobre", function(req, res){
//     res.sendFile(__dirname + "/html/sobre.htm");
// });

// app.get("/blog", function(req, res){
//     res.send("Bem vindo ao meu blog!");
// });

// app.get("/ola/:nome/:cargo", function(req, res){
//     res.send(req.params);
// });

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

//Config
    //Template Engine
    app.engine('handlebars', handlebars.create({defaultLayout: 'main'}).engine);
    app.set('view engine', 'handlebars');
    //Conexão com o banco de dados MySql
    const sequelize = new Sequelize('teste', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });

//Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    });

    app.post('/add', function(req, res){
        res.send('FORMULÁRIO RECEBIDO!')
    })

app.listen(8786, function(){
    console.log("Servidor Rodando na url http://localhost:8786");
});