const express = require("express")
const router = express.Router()

router

    // Login -----------------------------//
    .get('/', (req, res) => {
        const paramsUrl = req.query

        if(paramsUrl.fail)
            res.render("../views/login/", { message: 'Usuário ou senha incorretos. Tente novamente.' })
        else if(paramsUrl.userNotExist)
            res.render("../views/login/", { message: 'Usuário não é cadastrado.' })
        else
            res.render("../views/login/", { message: null })
    })

     // Home -----------------------------//
     .get('/home', (req, res) => {
        const session = req.session
        // console.log(session)

        if(!session.authorized)
            res.render("../views/login/expires")
        else
            res.render("../views/home", { userName: session.user.user_name })
    })

    // Login Expirado -------------------//
    .get('/expires', (req, res) => {
        res.render("../views/expires")
    })

    // Cadastrar Usuário
    .get('/registration', (req, res) => {
        const paramsUrl = req.query

        if(paramsUrl.emailExists)
            res.render("../views/registration", {
                emailExists: 'Este e-mail já foi cadastrado.',
                nameExists: null
            })
        else if (paramsUrl.nameExists)
            res.render("../views/registration", {
                emailExists: null,
                nameExists: 'Este nome já foi cadastrado.'
            })
        else
            res.render("../views/registration", {
                emailExists: null,
                nameExists: null
            })
    })

    // Atualizar Email do Usuário
    .get('/update/email', (req, res) => {
        const session = req.session
        const paramsUrl = req.query

        if(!session.authorized)
            res.render("../views/login/expires")
        else if(paramsUrl.fail)
            res.render("../views/account/update/email", { message: 'E-mail inválido ou já existente.' })
        else
            res.render("../views/account/update/email", { message: null })
    })

    // Atualizar Senha do Usuário
    .get('/update/password', (req, res) => {
        const session = req.session
        const paramsUrl = req.query

        if(!session.authorized)
            res.render("../views/login/expires")
        else if(paramsUrl.fail)
            res.render("../views/account/update/password", { message: 'Senhas devem ser iguais ou senha antiga está incorreta.' })
        else
            res.render("../views/account/update/password", { message: null })
    })

    // Atualizar Email do Usuário
    .get('/update/email/success', (req, res) => {
        const session = req.session

        if(!session.authorized)
            res.render("../views/login/expires")
        else
            res.render("../views/account/update/email/success")
    })

    // Menssagem de sucesso
    .get('/update/password/success', (req, res) => {
        const session = req.session

        if(!session.authorized)
            res.render("../views/login/expires")
        else
            res.render("../views/account/update/password/success")
    })

    //Suporte
    .get('/support', (req, res) => {
        const session = req.session

        if(!session.authorized)
            res.render("../views/login/expires")
        else
            res.render("../views/support")
    })

    //Perfil
    .get('/profile', (req, res) => {
        const session = req.session

        if(!session.authorized)
            res.render("../views/login/expires")
        else
            res.render("../views/profile")
    })

    //Erro ao deletar conta
    .get('/delete/error', (req, res) => {
        res.render("../views/account/delete/error")
    })

    //Erro ao atualizar e-mail conta
    .get('/update/email/error', (req, res) => {
        res.render("../views/account/update/email/error")
    })

    //Erro ao deletar conta
    .get('/update/password/error', (req, res) => {
        res.render("../views/account/update/password/error")
    })


module.exports = router
