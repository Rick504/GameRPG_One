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

    //Workers
    app.get("/Trabalhadores/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Trabalhadores', { data: dados_user })
        } 
    })

    //Technology
    app.get("/Tecnologia/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Tecnologia', { layout: false, data: dados_user })
        } 
    })

    //Support
    app.get("/Suporte/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Suporte', { data: dados_user })
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

    //Menssages
    app.get("/Menssagens/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Menssagens', { data: dados_user })
        } 
    })

    //Manual
    app.get("/Manual/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Manual', { data: dados_user })
        } 
    })

    //Históric
    app.get("/Historico/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Historico', { data: dados_user })
        } 
    })

    //Clan
    app.get("/Cla/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Cla', { data: dados_user })
        } 
    })

    //Comercio
    app.get("/Comercio/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Comercio', { data: dados_user })
        } 
    })

    //Diamonds
    app.get("/Diamantes/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Diamantes', { data: dados_user})
        }
    })    
    
    //Armys
    app.get("/Exercito/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Exercito', { data: dados_user })
        } 
    })
}  