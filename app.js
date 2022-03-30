const express = require("express")
const cookieParser = require("cookie-parser");
const session = require('express-session');
const cors = require('cors')
const app = express()


// Session/cookieParser - settings ---------------------------------------//
app.use(cookieParser())
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    resave : false , 
    saveUninitialized : false ,
    cookie: {
        httpOnly: true,
        maxAge: 3600000,
    }
}));


// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Cors - settings ---------------------------------------//
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers": "Authorization')
    res.header('Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Content-Type": "application/json;charset=UTF-8')
    app.use(cors())
    next()
})


// Routers -------------------------------------//
app.use('/', require('./routes/authentication'))
app.use('/', require('./routes/index'))
app.use('/', require('./routes/crud'))
app.use('/', require('./routes/testes'))
  

app.listen(3333, () => {
    console.log('listening on localhost:3333');
})