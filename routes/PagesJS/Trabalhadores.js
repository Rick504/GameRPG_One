module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Trabalhadores/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Trabalhadores', {layout: false, data: dados_user })
        } 
    })
}  