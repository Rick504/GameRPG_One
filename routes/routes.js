const path = require("path")
const workersController = require("../controllers/workersController")


module.exports = function ( app ) {

    //**********************  TESTES  ***************************** */

    app.get('/psql', async(req, res) => {
        const { rows } = await conn.query('select * from users')
        res.send(rows)
      })

    //**********************  APIS  ***************************** */

 
    app.get("/purchase_gold", workersController.workers_purchase_gold)
    app.get("/updateWorkers_gold", workersController.updateWorkers_gold)
    app.get("/updateWorkers_supplies", workersController.updateWorkers_supplies)
    app.get("/updateWorkers_wood", workersController.updateWorkers_wood)

    
    //**********************  Rotas  ***************************** */

    //Login - / HTML - rota
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + '../../views/html/login.html'))
        req.session.destroy()
    })
    

    //Cadastrar / HTML - rota
    app.get("/register", function (req, res) {
        res.sendFile(path.join(__dirname + "../../views/html/register.html"))
    })


    //Logged
    app.get("/Logged/:id",function(req,res){
        if (req.session.loggedin == true) {

            res.render('Logged', { data: dados_user })
        } else {
            res.send("<script>alert('Por favor, insira o nome e a senha!') history.back()</script>")
        }
    })

    //Trabalhadores
    app.get("/Workers/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Workers', { data: dados_user })
        } 
    })

    //Tecnologia
    app.get("/Technology/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Technology', { layout: false, data: dados_user })
        } 
    })

    //Suporte
    app.get("/Support/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Support', { data: dados_user })
        } 
    })

    //Ranking
    app.get("/Ranking/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Ranking', { data: dados_user })
        } 
    })

    //Profile
    app.get("/Profile/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Profile', { data: dados_user })
        } 
    })

    //Menssagens
    app.get("/Menssages/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Menssages', { data: dados_user })
        } 
    })

    //Manual
    app.get("/Manual/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Manual', { data: dados_user })
        } 
    })

    //Histórico
    app.get("/Historic/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Historic', { data: dados_user })
        } 
    })

    //Clã
    app.get("/Clan/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Clan', { data: dados_user })
        } 
    })

    //Comercio
    app.get("/Business/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Business', { data: dados_user })
        } 
    })

    //Diamantes
    app.get("/Diamonds/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Diamonds', { data: dados_user})
        }
    })    
    
    //Exercito
    app.get("/Armys/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Armys', { data: dados_user })
        } 
    })
}  