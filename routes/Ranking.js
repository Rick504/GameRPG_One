module.exports = function ( app ) {
    
    //Profile - Perfil
    app.get("/Ranking/:id",function(req,res){
        if (req.session.loggedin == true) {
            res.render('Ranking', {layout: false, data: name_e_id })
        } 
    })
}  