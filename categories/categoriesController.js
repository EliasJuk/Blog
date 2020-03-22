const express = require('express')
const router = express.Router();
const Category = require("./Category")
const slugfy = require('slugify')

router.get("/admin/categories/new", (req, res) => {
    res.render('admin/categories/new')
})

router.get('/categories/save', (req,res) => {
    var title = rq.body.title;
    if(title != undefined){
        //SALVA DB
        category.create({
            title: title,
            slug: slug
        })
    }else{
        res.redirect("/admin/categories/new")
    }
})

module.exports = router