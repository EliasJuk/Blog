const express = require('express')
const router = express.Router();
const category

router.get("/admin/categories/new", (req, res) => {
    res.render('admin/categories/new')
})

router.get('/categories/save', (req,res) => {
    var title = rq.body.title;
    if(title != undefined){
        //SALVA DB
        category.create()
    }else{
        res.redirect("/admin/categories/new")
    }
})

module.exports = router