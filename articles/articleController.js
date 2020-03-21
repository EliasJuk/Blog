const express = require('express')
const router = express.Router();

router.get("/article", (req,res) => {
    res.send("ROTA DE ARTICLE")
})

router.get("/admin/article/new", (req, res) => {
    res.send("ROTA PARA CRIAR UMA NOVA ARETICLE!")
})

module.exports = router