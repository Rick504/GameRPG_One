module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Comercio/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Comercio', {layout: false, data: dados_user })
        } 
    })
}  