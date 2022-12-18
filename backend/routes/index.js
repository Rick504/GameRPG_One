const express = require("express")
const urlencodeParser = express.urlencoded({ extended: false })
const router = express.Router()

//const businessController = require("../controllers/businessController")
//const rankingController = require("../controllers/rankingController")
//const workersController = require("../controllers/workersController")
const create_user = require("../controllers/users/create_user")
const read_user = require("../controllers/users/read_user")
const update_user = require("../controllers/users/update_user")
const delete_user = require("../controllers/users/delete_user")
const auth = require("../controllers/users/auth")
const logout = require("../controllers/users/logout")

router

        .get("/read_user", read_user.read_user)
        .get("/logout", logout.logout)
        //.get("/purchase_gold", workersController.buy_workers)
        //.get("/updateWorkers_gold", workersController.buy_worker_producing_gold)
        //.get("/updateWorkers_supplies", workersController.buy_updateWorkers_supplies)
        //.get("/updateWorkers_wood", workersController.buy_updateWorkers_wood)
        //.get("/ranking_users", rankingController.rakingFunc)

        .post("/create_user", urlencodeParser, create_user.create_user)
        .post("/auth", auth.auth_user)
        //.post("/Business/to_replace", urlencodeParser, businessController.exchange)

        .put("/update_user/:id", update_user.update_user)

        .delete("/delete_user/:id", urlencodeParser, delete_user.delete_user)


module.exports = router
