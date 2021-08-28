module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Suporte/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Suporte', {layout: false, data: dados_user })
        } 
    })
}  