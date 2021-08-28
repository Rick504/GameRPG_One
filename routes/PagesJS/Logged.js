module.exports = function ( app ) {
    
    //Logged - Logado
    app.get("/Logged/:id",function(req,res){
        if (req.session.loggedin == true) {

            //eviando requisições do BD ao logar
            dados_user = { 
                t_name, 
                user_id, 
                gold, 
                supplies, 
                wood, 
                army, 
                workers, 
                diamonds 
            }

            res.render('Logged', {layout: false, data: dados_user })
        } else {
            res.send("<script>alert('Por favor, insira o nome e a senha!'); history.back()</script>")
        }
    })
}  