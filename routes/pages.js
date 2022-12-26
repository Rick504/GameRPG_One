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

     // Home -----------------------------//
     .get('/home', (req, res) => {
        const session = req.session
        if(!session.loggedin)
            res.render("../views/login/expires")
        else
            res.render("../views/home", { userName: req.session.username })
    })

    // Login Expirado -------------------//
    .get('/expires', (req, res) => {
        res.render("../views/expires")
    })

    // Cadastrar Usuário
    .get('/registration', (req, res) => {
        res.render("../views/registration")
    })

    // Atualizar Email do Usuário
    .get('/update/email', (req, res) => {
        const session = req.session
        if(!session.loggedin)
            res.render("../views/login/expires")
        else if(req.query.fail)
            res.render("../views/account/update/email", { message: 'E-mail inválido.' })
        else
            res.render("../views/account/update/email", { message: null })
    })

    // Atualizar Senha do Usuário
    .get('/update/password', (req, res) => {
        const session = req.session
        if(!session.loggedin)
            res.render("../views/login/expires")
        else if(req.query.fail)
            res.render("../views/account/update/password", { message: 'Senhas devem ser iguais ou senha antiga está incorreta.' })
        else
            res.render("../views/account/update/password", { message: null })
    })

    // Atualizar Email do Usuário
    .get('/update/email/success', (req, res) => {
        const session = req.session
        if(!session.loggedin)
            res.render("../views/login/expires")
        else
            res.render("../views/account/update/email/success")
    })

    // Menssagem de sucesso
    .get('/update/password/success', (req, res) => {
        const session = req.session
        if(!session.loggedin)
            res.render("../views/login/expires")
        else
            res.render("../views/account/update/password/success")
    })

    //Suporte
    .get('/support', (req, res) => {
        const session = req.session
        if(!session.loggedin)
            res.render("../views/login/expires")
        else
            res.render("../views/support")
    })

    //Perfil
    .get('/profile', (req, res) => {
        const session = req.session
        if(!session.loggedin)
            res.render("../views/login/expires")
        else
            res.render("../views/profile")
    })


module.exports = router
