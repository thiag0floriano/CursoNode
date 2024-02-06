const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao conectar: "+erro)
// })

const Postagen = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }

})
// comando para criar a tabela a cima.
// Postagen.sync({force: true})

Postagen.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "dfhsfgfgsdfgfuhjtgnfhfargjghjghsfgsfg fgsdf sdhs sdfsdfhsdfh hsfhsdfhhs"
})

const Usuaroi = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
// comando para criar a tabela a cima.
// Usuaroi.sync({force: true})

Usuaroi.create({
    nome: "Thiago",
    sobrenome: "floriano",
    idade: 34,
    email: "thiagozmax1@gmail.com"
})