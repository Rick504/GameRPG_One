module.exports = function ( app ) {
    
    //Logged - Logado
    app.get("/Logged/:id",function(req,res){
        if (req.session.loggedin == true) {

            //eviando requisições do BD ao logar
            name_e_id = { t_name,user_id }

            res.render('Logged', {layout: false, data: name_e_id })
        } else {
            res.send("<script>alert('Por favor, insira o nome e a senha!'); history.back()</script>")
        }
    })
}  