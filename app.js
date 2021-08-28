const bodyParser=require('body-parser')
const mysql=require('mysql2')
const handlebars=require('express-handlebars')
const urlencodeParser=bodyParser.urlencoded({extended:false})
const path = require('path')
var app = require('express')()
, session = require('express-session')


//------------------------------------------------------------------------------------------------------------------------------------//

//MySql - settings
global.sql=mysql.createConnection({host: 'localhost', user: 'RWR', password: 'Password123#@!', database: 'cadastro'})
module.exports = sql
sql.query("use cadastro")

//session - settings ---------------------------------------//
app.use(session({secret: 'secret',resave: true,saveUninitialized: true}))

//bodyParser - settings -------------------------------------//
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

//handlebars - settings -------------------------------------//
app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'handlebars')


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
    sql.query("INSERT INTO users values (?,?,?,?)",[req.body.id, req.body.name, req.body.email, req.body.password])
	res.send('Cadastro Realizado')
	// res.sendFile(path.join(__dirname+'/html/registrationPerformed.html'))
})

//------------------------------------------------------------------------------------------------------------------------------------//

//Routes --- todas as rotas vem do index.js

require('./routes')(app)


//------------------------------------------------------------------------------------------------------------------------------------//


//aplicação

/*****/


//------------------------------------------------------------------------------------------------------------------------------------//

//teste

//console.log(game)
