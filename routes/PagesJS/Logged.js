module.exports = function ( app ) {
    
    //Logged - Logado
    app.get("/Logged/:id",function(req,res){
        if (req.session.loggedin == true) {

            res.render('Logged', {layout: false, data: dados_user })
        } else {
            res.send("<script>alert('Por favor, insira o nome e a senha!'); history.back()</script>")
        }
    })
}  