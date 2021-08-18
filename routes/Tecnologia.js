module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Tecnologia/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Tecnologia', {layout: false, data: dados_user })
        } 
    })
} 