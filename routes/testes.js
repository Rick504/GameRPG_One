const express = require("express")
const router = express.Router()

const users = require("../controllers/authentication_crud/users")

router 
    .get('/users', users.users)

module.exports = router
