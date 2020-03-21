const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//CONFIG
    //View Engine
        app.set("view engine", "ejs")
    //Statics
        app.use(express.static('public'))
    //Body Parser
        app.use(bodyParser.urlencoded({ extends: false }))
        app.use(bodyParser.json())

//ROUTES
    app.get("/", (req, res)=> {
        res.render("index")
    })

//CONFIG
    //START SERVER
        app.listen(8081, () =>{
            console.log("O servidor rodando na porta 8081")
        })