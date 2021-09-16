module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Exercito/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Exercito', { data: dados_user })
        } 
    })
}  