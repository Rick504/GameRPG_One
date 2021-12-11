const express = require("express")
const session = require("express-session")
const handlebars = require("express-handlebars")
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)


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


User = require('./models/all_players/select_users_data')


io.on('connection', (socket) => {

    socket.emit('shipping_features', 
                User.gold, 
                User.supplies,
                User.wood
    )

})
  

server.listen(3000, () => {
    console.log('listening on *:3000');
})
