const express = require("express")
const session = require("express-session")
const app = express()

// Session - settings ---------------------------------------//
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }))

// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routers -------------------------------------//
require("./routes")(app)
  
app.listen(3333, () => {
    console.log('listening on localhost:3333');
})