module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Profile/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Profile', {layout: false, data:name_e_id })
        } 
    })
}  