const express = require("express")
const session = require("express-session")
const { engine } = require('express-handlebars')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const app = express()

app.use(express.static(__dirname + '/public'))

// Config Variaveis Globais -------------------------------//
dotenv.config();

// handlebars - settings -----------------------------------------//
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

// Session - settings ---------------------------------------//
app.use(session({
    secret: "secret", // armazenar em uma variavel de ambiente
    resave: false, // a cada requisição salva a sessão novamente.
    saveUninitialized: false, //salvar sessões anonimas.
    cookie: {
        key: "is8-2inD-a83-dhuw-de", // chave criada por mim - setar novamente nas apis depois e testar
        maxAge: 30 * 60 * 1000 // 30 minutos -- 30 min * 60 segundos * 1000 milisegundos
    }
    //store (sem uso no momento) - aqui é feita a conecção com algum banco de dados para salvar a sessão no banco caso seja necessario
}))

// Cors - settings ---------------------------------------//
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }))

// CookieParser - settings --------------------------------//
app.use(cookieParser())

// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routers -------------------------------------//
app.use('/', require('./routes/index'))
app.use('/', require('./routes/pages'))

// port - settings ------------------------------------//
let PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`)
})
