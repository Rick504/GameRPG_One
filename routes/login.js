module.exports = function ( app ) {

    //Login - /
    app.get("/",function(req,res){
        res.render('login',{layout: false})
    })
    
    //Logged - Logado
    app.get("/Logged",function(req,res){
        if (req.session.loggedin == true) {
            t_name = {t_name}
            res.render('Logged', {layout: false, data:t_name })
            console.log(t_name)
        } else {
            res.send('Por favor, faça o login para ver esta página!')
        }
    })


    //exportando t_name para usar no logged
    var nameLogged = ()=>{t_name}
    module.exports = nameLogged

}