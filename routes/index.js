const express = require("express")
const urlencodeParser = express.urlencoded({ extended: false })
const router = express.Router()

//const businessController = require("../controllers/businessController")
//const rankingController = require("../controllers/rankingController")
//const workersController = require("../controllers/workersController")

router

        //.get("/purchase_gold", workersController.buy_workers)
        //.get("/updateWorkers_gold", workersController.buy_worker_producing_gold)
        //.get("/updateWorkers_supplies", workersController.buy_updateWorkers_supplies)
        //.get("/updateWorkers_wood", workersController.buy_updateWorkers_wood)
        //.get("/ranking_users", rankingController.rakingFunc)
        //.post("/Business/to_replace", urlencodeParser, businessController.exchange)

module.exports = router