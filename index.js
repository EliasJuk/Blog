const express = require('express')
const app = express()

//ROUTES
    app.get("/", (req, res)=> {
        res.send("BEM VINDO AO SITE")
    })

//CONFIG
    //START SERVER
        app.listen(8081, () =>{
            console.log("O servidor rodando na porta 8081")
        })