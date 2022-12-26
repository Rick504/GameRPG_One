const express = require("express")
const router = express.Router()

router

    // Login -----------------------------//
    .get('/', (req, res) => {
        if(req.query.fail)
            res.render("../views/login/", { message: 'Usuário ou senha incorretos. Tente novamente.' })
        else
            res.render("../views/login/", { message: null })
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
        if(req.query.fail)
            res.render("../views/accont/updateAccontEmail", { message: 'E-mail inválido.' })
        else
            res.render("../views/accont/updateAccontEmail", { message: null })
    })

    // Atualizar Senha do Usuário
    .get('/updateAccontPassword', (req, res) => {
        if(req.query.fail)
            res.render("../views/accont/updateAccontPassword", { message: 'Senhas devem ser iguais ou senha antiga está incorreta.' })
        else
            res.render("../views/accont/updateAccontPassword", { message: null })
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
