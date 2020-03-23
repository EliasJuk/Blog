const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

//Import models module
const Article = require('./articles/Article')
const Category = require('./categories/Category')

//Import routes module
const categoriesController = require("./categories/categoriesController")
const articleController = require("./articles/articleController")

//CONFIG
    //View Engine
        app.set("view engine", "ejs")
    //Statics
        app.use(express.static('public'))
    //Body Parser
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
    // Database
        connection.authenticate()
            .then(()=>{
                console.log('\x1b[42m\x1b[30mConexao feita com sucesso!\x1b[0m')
            }).catch((error)=>{
                console.log('\x1b[41m'+error+'\x1b[0m')
            })

//OTHER ROUTES
    //SET OTHER ROUTES FROM CATEGORIES
    app.use('/',categoriesController) //Prefix '/'
    app.use('/',articleController)

//ROUTES
    //MAIN
        app.get("/", (req, res) => {
            Article.findAll({
                order:[
                    ['id','DESC']
                ]
            }).then(articles => {
                res.render("index", { articles: articles })
            })
        })
    //ARTIGOS
        app.get("/:slug",(req, res) => {
            var slug = req.params.slug;
            Article.findOne({
                where: {
                    slug: slug
                } 
            }).then(article => {
                if(article != undefined){
                    res.render("article",{article: article})
                }else{
                    res.redirect("/")
                }
            }).catch( err => {
                res.redirect("/")
            })
        })

//CONFIG
    //START SERVER
        app.listen(8081, () =>{
            console.log("O servidor rodando na porta 8081")
        })