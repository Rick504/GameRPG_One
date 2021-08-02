module.exports = function ( app ) {
    
    //logout - sair
    app.get("/logout",function(req,res){
        res.render('logout',{layout: false})
        req.session.destroy()
    })

}