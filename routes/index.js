const express = require("express")
const router = express.Router()

//const businessController = require("../controllers/businessController")
//const rankingController = require("../controllers/rankingController")
//const workersController = require("../controllers/workersController")
const { create_user } = require("../controllers/users/create_user")
const { update_user_email } = require("../controllers/users/update_user_email")
const { update_user_password } = require("../controllers/users/update_user_password")
const { delete_user } = require("../controllers/users/delete_user")
const { auth } = require("../controllers/users/auth")
const { logout } = require("../controllers/users/logout")

const { testes } = require("../controllers/testes/testes")

router
// Teste ------------------------------------------------------------------//
        .get('/teste', testes)

        // ------------------------------- APIs ---------------------------------- //
        .get("/logout", logout)
        //.get("/purchase_gold", workersController.buy_workers)
        //.get("/updateWorkers_gold", workersController.buy_worker_producing_gold)
        //.get("/updateWorkers_supplies", workersController.buy_updateWorkers_supplies)
        //.get("/updateWorkers_wood", workersController.buy_updateWorkers_wood)
        //.get("/ranking_users", rankingController.rakingFunc)

        .post("/create_user", create_user)
        .post("/auth", auth)
        .post("/update_user_email", update_user_email)
        .post("/update_user_password", update_user_password)
        .post("/delete_user", delete_user)
        //.post("/Business/to_replace", businessController.exchange)


module.exports = router
