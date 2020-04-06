const express = require('express')
const router = express.Router()
const Users = require('./user')
const bcrypt= require('bcryptjs')


//LISTAR USUARIOS
    router.get('/admin/users', (req, res) => {
        res.send("Listagem de usuarios")
    })

//FORMULARIO DE CRIAÇÃO
    router.get("/admin/users/create", (req, res) => {
        res.render('admin/users/create')
    })

//CADASTRA NO BANCO
router.post("/users/create", (req, res) => {
    var email = req.body.email
    var password = req.body.password

    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(password, salt)

    Users.create({
        email: email,
        password: hash
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.redirect('/')
    })
})

//LISTAGEM DE USUARIOS
    router.get("/users/list", (req, res) => {
        Users.findAll().then(users => {
            res.json(users);
        })
    })


module.exports = router;