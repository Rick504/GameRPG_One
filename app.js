const bodyParser=require('body-parser')
const mysql=require('mysql2')
const handlebars=require('express-handlebars')
const urlencodeParser=bodyParser.urlencoded({extended:false})
const path = require('path')
var app = require('express')()
, session = require('express-session')
, dataAtual = new Date()

//------------------------------------------------------------------------------------------------------------------------------------//

//MySql - settings
const sql=mysql.createConnection({host: 'localhost', user: 'RWR', password: 'Password123#@!', database: 'cadastro'})
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
    sql.query("insert into users values (?,?,?,?)",[req.body.id,req.body.name,req.body.email,req.body.password])
    /*res.render('registrationPerformed', {layout: false , name:req.body.name})*/
	res.sendFile(path.join(__dirname+'/html/registrationPerformed.html'), {name:req.body.name})
})

// /auth - api -------------------------------------------------------------------------------------------------------------------------------

app.post('/auth', function(req, res) {
	var name = req.body.name
	var password = req.body.password
	if (name && password) {
		sql.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], function(error, results, fields) {
			if (results.length > 0) {
				//requisições do BD
				req.session.loggedin = true
				req.session.name = name
				
				//preparando para o handlebars usar
				t_name = req.session.name
				user_id = results[0].id
				gold = results[0].gold
				supplies = results[0].supplies
				wood = results[0].wood
				army = results[0].army
				workers = results[0].workers
				diamonds = results[0].diamonds
				

				//redirecionar para logado com id
				res.redirect('/Logged/' + user_id)
				
				//console.log(results) para teste.
				
				//vizualizar quem logou data e hora
				console.log(' id Logado: ' + user_id  + ' Jogador: ' + t_name + ' ' + dataAtual)
			} else {
				res.send("<script>alert('Nome e / ou password incorretos!'); history.back()</script>")
			}			
			res.end()
		})
	} else {
		res.end()
	}
})


//------------------------------------------------------------------------------------------------------------------------------------//

//Routes --- todas as rotas vem do index.js

require('./routes')(app)


//------------------------------------------------------------------------------------------------------------------------------------//


//aplicação
require('./game')


//------------------------------------------------------------------------------------------------------------------------------------//

//teste

//console.log(game)
