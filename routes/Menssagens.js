module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Menssagens/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Menssagens', {layout: false, data: name_e_id })
        } 
    })
} 