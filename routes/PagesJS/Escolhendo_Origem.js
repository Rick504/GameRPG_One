module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Escolhendo_Origem/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Escolhendo_Origem', { data: dados_user })
        } 
    })
}  