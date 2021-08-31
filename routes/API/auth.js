module.exports = function ( app ) {

    var dataAtual = new Date()

    app.post('/auth', function(req, res) {
        var name = req.body.name
        var password = req.body.password
        if (name && password) {
            sql.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], function(error, results, fields) {
                if (results.length > 0) {
                    //requisições do BD
                    req.session.loggedin = true
                    req.session.name = name
                    
                    //preparando para o handlebars usar
                    t_name = req.session.name
                    user_id = results[0].id
                    gold = results[0].gold
                    supplies = results[0].supplies
                    wood = results[0].wood
                    army = results[0].army
                    workers = results[0].workers
                    diamonds = results[0].diamonds
                    
                    //redirecionar para logado com id
                    res.redirect('/Logged/' + user_id)
                    
                    //console.log(results) para teste.

                       //eviando requisições do BD ao logar
                        dados_user = { 
                            t_name, 
                            user_id, 
                            gold, 
                            supplies, 
                            wood, 
                            army, 
                            workers, 
                            diamonds 
                        }
                    
                    //vizualizar quem logou data e hora
                    console.log(' id Logado: ' + user_id  + ' Jogador: ' + t_name + ' ' + dataAtual)
                } else {
                    res.send("<script>alert('Nome e / ou password incorretos!'); history.back()</script>")
                }			
                res.end()
            })
        } else {
            res.end()
        }
    })
}  