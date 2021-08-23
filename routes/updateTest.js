module.exports = function ( app ) {
    
    //Update diamonds
    app.get("/updateTest/:id",function(req,res){
        if (req.session.loggedin == true) {
            sql.query("UPDATE users SET diamonds = '120' WHERE id = ?",[user_id])
            res.send("udpdate pronto")
        } 
    })
}  
