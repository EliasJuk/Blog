const Sequelize = require('sequelize')
const connection = require('../database/database')

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

module.exports = Article