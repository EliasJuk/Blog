const express = require('express')
const app = express()

//View engine
    app.set('view engine', 'ejs')

//ROUTES
    app.get("/", (req, res)=> {
        res.render("./index")
    })

//CONFIG
    //START SERVER
        app.listen(8081, () =>{
            console.log("O servidor rodando na porta 8081")
        })