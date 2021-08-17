module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Comercio/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Comercio', {layout: false, data: name_e_id })
        } 
    })
}  