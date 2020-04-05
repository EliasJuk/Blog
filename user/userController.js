const express = require('express')
const router = express.Router()
const user = require('./user')


router.get('/admin/users', (req, res) => {
    res.send("Listagem de usuarios")
})

router.get("/admin/users/create", (req, res) => {
    res.render('admin/users/create')
})

module.exports = router;