const express = require("express")
const session = require("express-session")
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');
const cors = require('cors')
const app = express()

// ejs - settings -----------------------------------------//
app.set('view engine', 'ejs')

// flash - settings ---------------------------------------//
app.use(flash())

// Session - settings ---------------------------------------//
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
        key: "is8-2inD-a83-dhuw-de", // chave criada por mim
        maxAge: 360000 // 3hrs para expirar
    }
}))

// Cors - settings ---------------------------------------//
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers": "Authorization')
    res.header('Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Content-Type": "application/json;charset=UTF-8')
    app.use(cors())
    next()
})

// CookieParser - settings --------------------------------//
app.use(cookieParser())

// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routers -------------------------------------//
app.use('/', require('./routes/index'))
app.use('/', require('./routes/pages'))

// port - settings ------------------------------------//
app.listen(3000, () => {
    console.log('listening on localhost:3000')
})
