module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Exercito/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Exercito', {layout: false, data: name_e_id })
        } 
    })
}  