module.exports = function ( app ) {
    
    app.post("/auth", function(req, res) {

        let { u_name, password } = req.body
        
        if (u_name && password) {
            pool.query('SELECT * FROM users WHERE u_name = $1 AND password = $2', [u_name, password], function(error, results, fields) {
                if (results.rows.length > 0) {
                    //requisições do BD
                    req.session.loggedin = true
                    req.session.u_name = u_name
                    t_name = req.session.u_name

                    //trazendo do Banco
                    user_id = results.rows[0].id
                    diamonds = results.rows[0].diamonds
                    gold = results.rows[0].gold
                    supplies = results.rows[0].supplies
                    wood = results.rows[0].wood
                    worker_producing_gold = results.rows[0].worker_producing_gold
                    worker_producing_supplies = results.rows[0].worker_producing_supplies
                    worker_producing_wood = results.rows[0].worker_producing_wood
                    cla = results.rows[0].cla
                    level = results.rows[0].level                    
                    origin = results.rows[0].origin
                    army = results.rows[0].army
                    workers = results.rows[0].workers

                    //redirecionar para logado com id
                    res.redirect('/Logged/' + user_id)

                    //console.log(rows) para teste.

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