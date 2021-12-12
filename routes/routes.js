
const express = require("express")
const urlencodeParser = express.urlencoded({ extended: false })
const knex = require('../models/config/conn_knex')

const auth = require("../controllers/authentication_crud/auth")
const insertAPI = require("../controllers/authentication_crud/registration_performed")
const deleteAPI = require("../controllers/authentication_crud/delete")
const businessController = require("../controllers/businessController")
const rankingController = require("../controllers/rankingController")
const mainController = require("../controllers/mainController")


module.exports = (app) => {

    //**********************  TESTES  ***************************** */

    app.get('/psql', async (req, res) => {y
        const rows = await knex.table('users')
        res.send(rows)
    })

    //**********************  APIS  ***************************** */


    app.post("/Business/to_replace", urlencodeParser, businessController.exchange)
    app.get("/del_acount/:id", urlencodeParser, deleteAPI.del_user)
    app.post("/auth", auth.auth_user)
    app.post("/registration_performed", urlencodeParser, insertAPI.insert_user)
    app.get("/ranking_users", rankingController.rakingFunc)
    app.get("/main_users", mainController.mainFunc)


    //**********************  Rotas  ***************************** */

    //Login
    app.get("/", async (req, res) => {
        res.render('login', { layout: false })
        await req.session.destroy()
    })

    //Cadastrar
    app.get("/register", async (req, res) => {
        res.render('register', { layout: false })
        await req.session.destroy()
    })

    //delete    
    app.get("/delete/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('delete', { layout: false, data: dados_user })
        }
    })

    //Logged
    app.get("/Logged/:id", (req, res) => {
        if (req.session.loggedin == true) {

            res.render('Logged', { data: dados_user })
        } else {
            res.send("<script>alert('Por favor, insira o nome e a senha!') history.back()</script>")
        }
    })

    //Trabalhadores
    app.get("/Workers/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Workers', { data: dados_user })
        }
    })

    //Tecnologia
    app.get("/Technology/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Technology', { layout: false, data: dados_user })
        }
    })

    //Suporte
    app.get("/Support/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Support', { data: dados_user })
        }
    })

    //Ranking
    app.get("/Ranking/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Ranking', { data: dados_user })
        }
    })

    //Profile
    app.get("/Profile/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Profile', { data: dados_user })
        }
    })

    //Menssagens
    app.get("/Menssages/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Menssages', { data: dados_user })
        }
    })

    //Manual
    app.get("/Manual/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Manual', { data: dados_user })
        }
    })

    //Histórico
    app.get("/Historic/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Historic', { data: dados_user })
        }
    })

    //Clã
    app.get("/Clan/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Clan', { data: dados_user })
        }
    })

    //Comercio
    app.get("/Business/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Business', { data: dados_user })
        }
    })

    //Diamantes
    app.get("/Diamonds/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Diamonds', { data: dados_user })
        }
    })

    //Exercito
    app.get("/Armys/:id", (req, res) => {
        if (req.session.loggedin == true) {
            res.render('Armys', { data: dados_user })
        }
    })
}