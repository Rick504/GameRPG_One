const express = require("express")
const session = require("express-session")
const cors = require('cors')
const app = express()

// Session - settings ---------------------------------------//
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }))

// Cors - settings ---------------------------------------//
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    app.use(cors())
    next()
})

// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routers -------------------------------------//
require("./routes")(app)
  
app.listen(3333, () => {
    console.log('listening on localhost:3333');
})