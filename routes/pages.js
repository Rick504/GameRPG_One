const express = require("express")
const router = express.Router()

router

    // Login -----------------------------//
    .get('/', (req, res) => {
        res.render("../views/login/", {
            errorLogin: req.session.flash
        })
    })

    // Login Expirado -------------------//
    .get('/loginExpires', (req, res) => {
        res.render("../views/loginExpires")
    })

    // Cadastrar Usuário
    .get('/register', (req, res) => {
        res.render("../views/register")
    })

    // Home -----------------------------//
    .get('/home/:params', (req, res) => {
        const session = req.session
        if(!session.loggedin) {
            res.render("../views/login/loginExpires")
        }
        res.render("../views/home", {
            userName: req.session.username
        })
    })


module.exports = router
