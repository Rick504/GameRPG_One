module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Menssagens/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Menssagens', { data: dados_user })
        } 
    })
} 