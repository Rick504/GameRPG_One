const bodyParser=require('body-parser')
const mysql=require('mysql2')
const handlebars=require('express-handlebars')
const urlencodeParser=bodyParser.urlencoded({extended:false})
var app = require('express')()
, session = require('express-session')
var allgame = require('./game')
var { pessoa } = require('./game')

//------------------------------------------------------------------------------------------------------------------------------//

//settings

//mysql
const sql=mysql.createConnection({
    host: 'localhost',
    user: 'RWR', 
    password: 'Password123#@!',
    database: 'cadastro'
})
sql.query("use cadastro")

//session---------------------------------------
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

//bodyParser-------------------------------------
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

//handlebars-------------------------------------
app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'handlebars')


//------------------------------------------------------------------------------------------------------------------------------//

//Cadastrar
app.get("/register",function(req,res){
	res.render("register",{layout: false})
})

//Cadastro Realizado
app.post("/registrationPerformed",urlencodeParser,function(req,res){
    sql.query("insert into users values (?,?,?,?)",[req.body.id,req.body.name,req.body.email,req.body.password])
    res.render('registrationPerformed', {layout: false , name:req.body.name})
})

// /auth
app.post('/auth', function(req, res) {
	var name = req.body.name
	var password = req.body.password
	if (name && password) {
		sql.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true
				req.session.name = name
				t_name = req.session.name

				user_id = results[0].id
				res.redirect('/Logged/' + user_id)
			} else {
				res.send("<script>alert('Nome e / ou password incorretos!'); history.back()</script>")
			}			
			res.end()
		})
	} else {
		res.end()
	}
})

//------------------------------------------------------------------------------------------------------------------------------//

//Routes --- todas as rotas vem do index.js

require('./routes')(app)


//------------------------------------------------------------------------------------------------------------------------------//


//aplicação


//*******/

//------------------------------------------------------------------------------------------------------------------------------//

//teste

const game = allgame
console.log(game)
console.log(pessoa)