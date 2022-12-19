const express = require("express")
const session = require("express-session")
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

// HandLebars
const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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


// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Routers -------------------------------------//
app.use('/', require('./routes/index'))
app.use('/', require('./routes/testes'))


app.listen(3000, () => {
    console.log('listening on localhost:3000');
})
