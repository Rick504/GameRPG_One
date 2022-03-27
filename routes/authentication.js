const express = require("express")
const router = express.Router()

const auth = require("../controllers/authentication_crud/auth")
const logout = require("../controllers/authentication_crud/logout")

router

    .get("/logout", logout.logout)
    .post("/auth", auth.auth_user)

module.exports = router