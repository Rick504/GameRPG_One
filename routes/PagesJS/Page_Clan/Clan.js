module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Cla/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Cla', { data: dados_user })
        } 
    })
}  