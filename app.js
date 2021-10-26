const handlebars=require('express-handlebars')
const bodyParser=require('body-parser')
const urlencodeParser=bodyParser.urlencoded({extended:false})
const path = require('path')
const express = require('express')
const app = express()
const session = require('express-session')

// //------------------------------------------------------------------------------------------------------------------------------------//

//modulo que carrega variaveis de ambiente em arquivo .env
// require('dotenv').config()

const Pool = require('pg').Pool
global.pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'First_game',
  password: '123',
  port: 5432,
})
module.exports = pool

//session - settings ---------------------------------------//
app.use(session({secret: 'secret',resave: true,saveUninitialized: true}))

// //bodyParser - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

// //handlebars - settings -------------------------------------//

app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}))

app.use(express.static('public'))

// //------------------------------------------------------------------------------------------------------------------------------------//

//Login - / HTML - rota
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/html/login.html'))
    // req.session.destroy()
  })
  
  //Cadastrar / HTML - rota 
app.get('/register',function(req,res) {
   res.sendFile(path.join(__dirname+'/html/register.html'))
})

// API para ver resultados do Banco
app.get('/psql', async(req, res) => {
  const { rows } = await pool.query('select * from users')
  res.send(rows)
})

//Cadastro Realizado / HTML - api
app.post("/registrationPerformed",urlencodeParser,function(req,res){
  const { u_name, email, password, origin } = req.body

  pool.query(`INSERT INTO users(u_name, email, password, origin) VALUES ($1, $2, $3, $4) RETURNING id;`,
  [u_name,email,password,origin]), (error, results) => {
    if (error) {
      throw error
    }}
    res.sendFile(path.join(__dirname+'/html/registrationPerformed.html'))
})

// //------------------------------------------------------------------------------------------------------------------------------------//

// //Tudo que vem do routers

require('./routes')(app)