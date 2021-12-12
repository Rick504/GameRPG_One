const auth_user = async (req, res) => {
        
        let { u_name, password } = req.body

        if (u_name && password) {
            await conn.query('SELECT * FROM users WHERE u_name = $1 AND password = $2', [u_name, password], (error, results, fields) => {
                if (results.rows.length > 0) {
                    //requisições do BD
                    req.session.loggedin = true
                    req.session.u_name = u_name
                    t_name = req.session.u_name

                    //trazendo do Banco
                    user_id = results.rows[0].id
                    diamonds = results.rows[0].diamonds

                    //redirecionar para logado com id
                    res.redirect('/Logged/' + user_id)

                    //eviando requisições do BD ao logar
                    dados_user = {
                        t_name,
                        user_id,
                        diamonds,
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
    }

module.exports = { auth_user }