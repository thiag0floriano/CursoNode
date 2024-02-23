const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// Post.sync({force:true})

// Método para buscar todas as postagens
Post.all = function() {
    return Post.findAll();
};

module.exports = Post