const express = require("express")
const router = express.Router()

const users = require("../controllers/testes/users")

router 
    .get('/users', users.users)

module.exports = router
