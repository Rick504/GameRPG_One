const express = require("express")
const session = require("express-session")
const handlebars = require("express-handlebars")
const app = express()
const server = require('http').createServer(app)
const PORT = 3000


// Session - settings ---------------------------------------//
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }))

// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Handlebars - settings -------------------------------------//
app.set("view engine", "handlebars")

app.engine(
    "handlebars",
    handlebars({
        layoutsDir: __dirname + "/views/layouts",
    })
)

app.use(express.static("public"))
app.use(express.static("public/css"))

require("./models/config/database")
require("./routes")(app)

//Start Server
server.listen(PORT,  () => { console.log('Server on Port:' + PORT) })

