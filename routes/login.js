module.exports = function ( app ) {

    //Login - /
    app.get("/",function(req,res){
        res.render('login',{layout: false})
        req.session.destroy()
    })
    
    //Logged - Logado
    app.get("/Logged",function(req,res){
        if (req.session.loggedin == true) {
            t_name = {t_name}
            res.render('Logged', {layout: false, data:t_name })
            console.log(t_name)
        } else {
            res.send("<script>alert('Por favor, insira o nome e a senha!'); history.back()</script>")
        }
    })

    app.get("/LoggedGame/:id",function(req,res){
        sql.query("select name from users where id=?",[req.params.id],function(err,results,fields) {
            res.render('LoggedGame',{layout: false,data:results})
        })
    })
}  