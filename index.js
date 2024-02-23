
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

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Post = require('./models/Post')

//Config
    //Template Engine
        app.engine('handlebars', handlebars.create({defaultLayout: 'main'}).engine);
        app.set('view engine', 'handlebars');
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

//Rotas

    app.get('/', function(req, res){
        Post.all().then(function(posts){
            res.render('home', {posts: posts})
        }).catch(function(erro){
            console.error("Erro ao buscar postagens:", erro);
            res.status(500).send("Houve um erro ao buscar as postagens.");
        });
    });

    app.get('/cad', function(req, res){
        res.render('formulario')
    });

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    })

app.listen(8786, function(){
    console.log("Servidor Rodando na url http://localhost:8786");
});