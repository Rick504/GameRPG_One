const express = require("express")
const session = require("express-session")
const handlebars = require("express-handlebars")
const app = express()
const http = require('http')
const server = http.createServer(app)


// Session - settings ---------------------------------------//
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }))


// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Handlebars - settings -------------------------------------//
app.set("view engine", "handlebars")
app.engine("handlebars", handlebars({ layoutsDir: __dirname + "/views/layouts", }))


// Express Static -------------------------------------//
app.use(express.static("public"))
app.use(express.static("public/css"))


// Routers -------------------------------------//
require("./routes")(app)
  

server.listen(3000, () => {
    console.log('listening on *:3000');
})
