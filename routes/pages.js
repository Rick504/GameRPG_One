const express = require("express")
const router = express.Router()

router

    // Login -----------------------------//
    .get('/', (req, res) => {
        res.render("../views/login/", { errorLogin: req.session.flash })
    })

    // Login Expirado -------------------//
    .get('/loginExpires', (req, res) => {
        res.render("../views/loginExpires")
    })

    // Cadastrar Usuário
    .get('/registration', (req, res) => {
        res.render("../views/accont/registration")
    })

    // Atualizar Email do Usuário
    .get('/updateAccontEmail', (req, res) => {
        res.render("../views/accont/updateAccontEmail", { errorUpdateEmail: req.session.flash })
    })

    // Atualizar Senha do Usuário
    .get('/updateAccontPassword', (req, res) => {
        res.render("../views/accont/updateAccontPassword", { errorUpdatePassword: req.session.flash })
    })

    // Atualizar Email do Usuário
    .get('/updateEmailSuccess', (req, res) => {
        res.render("../views/msgSuccess/updateEmailSuccess")
    })

    // Menssagem de sucesso
    .get('/updatePasswordSuccess', (req, res) => {
        res.render("../views/msgSuccess/updatePasswordSuccess")
    })

    //Suporte
    .get('/support', (req, res) => {
        res.render("../views/support")
    })

    //Perfil
    .get('/profile', (req, res) => {
        res.render("../views/profile")
    })

    // Home -----------------------------//
    .get('/home', (req, res) => {
        const session = req.session
        if(!session.loggedin) {
            res.render("../views/login/loginExpires")
        }
        res.render("../views/home", {
            userName: req.session.username
        })
    })


module.exports = router
