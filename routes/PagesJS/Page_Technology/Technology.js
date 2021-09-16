module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Tecnologia/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Tecnologia', { data: dados_user })
        } 
    })
} 