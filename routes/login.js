module.exports = function ( app ) {

    //Login - /
    app.get("/",function(req,res){
        res.render('login',{layout: false})
        req.session.destroy()
    })
    
    //Logged - Logado
    app.get("/Logged/:id",function(req,res){
        if (req.session.loggedin == true) {
            t_name = {t_name}
            res.render('Logged', {layout: false, data:t_name })
            console.log(t_name)
        } else {
            res.send("<script>alert('Por favor, insira o nome e a senha!'); history.back()</script>")
        }
    })
}  