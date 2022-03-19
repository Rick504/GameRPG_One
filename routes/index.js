
const express = require("express")
const urlencodeParser = express.urlencoded({ extended: false })
const knex = require('../config/conn_knex')

// Controllers APIS
const auth = require("../controllers/authentication_crud/auth")
const insertAPI = require("../controllers/authentication_crud/registration_performed")
const deleteAPI = require("../controllers/authentication_crud/delete")
const businessController = require("../controllers/businessController")
const rankingController = require("../controllers/rankingController")
const mainController = require("../controllers/mainController")
const workersController = require("../controllers/workersController")

module.exports = (app) => {

    app
        
        //TEST
        .get('/users', async (req, res) => {
            const rows = await knex.table('users')
            res.send(rows)
        })

        //Login
        .get("/", (req, res) => { req.session.destroy() })
        .get("/main_users", mainController.mainFunc)
        .get("/purchase_gold", workersController.buy_workers)
        .get("/updateWorkers_gold", workersController.buy_worker_producing_gold)
        .get("/updateWorkers_supplies", workersController.buy_updateWorkers_supplies)
        .get("/updateWorkers_wood", workersController.buy_updateWorkers_wood)
        .get("/del_acount/:id", urlencodeParser, deleteAPI.del_user)
        .get("/ranking_users", rankingController.rakingFunc)

        .post("/auth", auth.auth_user)
        .post("/registration_performed", urlencodeParser, insertAPI.insert_user)
        .post("/Business/to_replace", urlencodeParser, businessController.exchange)
}