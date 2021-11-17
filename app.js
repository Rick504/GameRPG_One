const express = require("express")
const session = require("express-session")
const handlebars = require("express-handlebars")

const app = express()

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

require("./models/config/database")
require("./routes")(app)