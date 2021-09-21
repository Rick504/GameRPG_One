const bodyParser=require('body-parser')
const mysql=require('mysql2')
const handlebars=require('express-handlebars')
const urlencodeParser=bodyParser.urlencoded({extended:false})
const path = require('path')
const express = require('express')
const app = express()
, session = require('express-session')


//------------------------------------------------------------------------------------------------------------------------------------//

//modulo que carrega variaveis de ambiente em arquivo .env
require('dotenv').config()

//MySql - settings
global.sql=mysql.createConnection({host: 'localhost', user: 'RWR', password: 'Password123#@!', database: 'First_game'})
module.exports = sql
sql.query("use First_game")

//session - settings ---------------------------------------//
app.use(session({secret: 'secret',resave: true,saveUninitialized: true}))

//bodyParser - settings -------------------------------------//
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

//handlebars - settings -------------------------------------//

app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}))

app.use(express.static('public'))

//------------------------------------------------------------------------------------------------------------------------------------//

//Login - / HTML - rota
app.get('/',function(req,res) {
   res.sendFile(path.join(__dirname+'/html/login.html'))
   req.session.destroy()
})


//Cadastrar / HTML - rota 
app.get('/register',function(req,res) {
	res.sendFile(path.join(__dirname+'/html/register.html'))
})


//Cadastro Realizado / HTML - api
app.post("/registrationPerformed",urlencodeParser,function(req,res){
    sql.query("INSERT INTO users (id,name,email,password,origin) values (?,?,?,?,?) ",[req.body.id, req.body.name, req.body.email, req.body.password, req.body.origin])
    res.sendFile(path.join(__dirname+'/html/registrationPerformed.html'))
})

//------------------------------------------------------------------------------------------------------------------------------------//

//Tudo que vem do routers

require('./routes')(app)
