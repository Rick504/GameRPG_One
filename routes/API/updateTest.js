module.exports = function ( app ) {
    
    //Update diamonds
    app.get("/updateTest",function(req,res){
        var addDiamantes = 20
        var diamantesAtual = parseInt(diamonds)  +  parseInt(addDiamantes)
    
    
        if (req.session.loggedin == true) {
            sql.query("UPDATE users SET diamonds = " + diamantesAtual + " WHERE id = ?",[user_id])
            res.redirect('/Diamantes/'+ user_id)
        } 
    })
}  

