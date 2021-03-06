const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, //SLUG IS ADDRESS TO CATEGORY
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article) //Uma categoria tem muitos artigos
Article.belongsTo(Category) //Um artigo pertence a uma categoria

//Article.sync({ force: true }) //Remover o comentario somente quando precizar gerar essa tabela

module.exports = Article