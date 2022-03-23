
const express = require("express")
const urlencodeParser = express.urlencoded({ extended: false })

const users = require("../controllers/authentication_crud/users")
const auth = require("../controllers/authentication_crud/auth")
const create_user = require("../controllers/authentication_crud/create_user")
const read_user = require("../controllers/authentication_crud/read_user")
const put_user = require("../controllers/authentication_crud/put_user")
const delete_user = require("../controllers/authentication_crud/delete_user")
const businessController = require("../controllers/businessController")
const rankingController = require("../controllers/rankingController")
const workersController = require("../controllers/workersController")

module.exports = (app) => {

    app
        
        //Testes
        .get('/users', users.users)

        //ROTAS
        .get("/", (req, res) => { req.session.destroy() })
        .get("/purchase_gold", workersController.buy_workers)
        .get("/updateWorkers_gold", workersController.buy_worker_producing_gold)
        .get("/updateWorkers_supplies", workersController.buy_updateWorkers_supplies)
        .get("/updateWorkers_wood", workersController.buy_updateWorkers_wood)
        .get("/ranking_users", rankingController.rakingFunc)
        .post("/auth", auth.auth_user)
        .post("/Business/to_replace", urlencodeParser, businessController.exchange)

        //CRUD
        .post("/create_user", urlencodeParser, create_user.create_user)
        .get("/user", read_user.read_user)
        .put("/put_user/:id", put_user.put_user)
        .delete("/delete_user/:id", urlencodeParser, delete_user.delete_user)
    }
