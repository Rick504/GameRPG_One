module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Historico/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Historico', { data: dados_user })
        } 
    })
}  