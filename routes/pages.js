const express = require("express")
const router = express.Router()

router

    // Login -----------------------------//
    .get('/', (req, res) => {
        res.render("../views/login/", {
            errorLogin: req.session.flash
        })
    })

    // Home -----------------------------//
    .get('/home', (req, res) => {
        const session = req.session.loggedin
        if(!session) {
            res.render("../views/login/loginExpires")
        }
        res.render("../views/home", {
            userName: req.session.username
        })
    })

     // Login Expirado -------------------//
     .get('/loginExpires', (req, res) => { res.render("../views/loginExpires") })

module.exports = router
