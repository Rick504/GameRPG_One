module.exports = function ( app ) {

    apiSecret = process.env.API_ROTA_URL_AUTHENTICATION

    app.post(apiSecret, function(req, res) {
        var name = req.body.name
        var password = req.body.password
        if (name && password) {
            sql.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], function(error, results, fields) {
                if (results.length > 0) {
                    //requisições do BD
                    req.session.loggedin = true
                    req.session.name = name

                    //trazendo do mysql
                    user_id = results[0].id
                    t_name = req.session.name
                    
                    diamonds = results[0].diamonds

                    //Ouro / Suprimetos / Madseira
                    gold = results[0].gold
                    supplies = results[0].supplies
                    wood = results[0].wood
                    worker_producing_gold = results[0].worker_producing_gold
                    worker_producing_supplies = results[0].worker_producing_supplies
                    worker_producing_wood = results[0].worker_producing_wood

                    cla = results[0].clã
                    level = results[0].level                    
                    origin = results[0].origin

                    //Exercito / Trabalhadores
                    army = results[0].army
                    workers = results[0].workers

                    //redirecionar para logado com id
                    res.redirect('/Logged/' + user_id)

                    //console.log(results) para teste.

                    //eviando requisições do BD ao logar
                    dados_user = {
                        t_name,
                        user_id,
                        origin,
                        level,
                        cla,
                        gold,
                        supplies,
                        wood,
                        army,
                        workers,
                        diamonds,
                        worker_producing_gold,
                        worker_producing_supplies,
                        worker_producing_wood
                    }

                    //visualizar quem logou data e hora
                    console.log(' id Logado: ' + user_id  + ' Jogador: ' + t_name)
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