module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Manual/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Manual', {layout: false, data: dados_user })
        } 
    })
}  