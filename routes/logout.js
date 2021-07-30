module.exports = function ( app ) {
    
    //logout - sair
    app.get("/logout",function(req,res){
        res.send('Deslogado com sucesso!!')
        req.session.destroy()
})

}