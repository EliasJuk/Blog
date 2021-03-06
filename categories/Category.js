const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    } //SLUG IS ADDRESS TO CATEGORY
})

//Category.sync({ force: true }) //Remover o comentario somente quando precizar gerar essa tabela

module.exports = Category