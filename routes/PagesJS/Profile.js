module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Profile/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Profile', { data: dados_user })
        } 
    })
}  