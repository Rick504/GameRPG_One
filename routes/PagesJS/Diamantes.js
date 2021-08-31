module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Diamantes/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Diamantes', {layout: false, data: dados_user})
        } 
    })
}  