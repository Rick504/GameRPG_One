const knex = require('../../config/conn_knex')

const auth_user = async (req, res) => {
        
        let { user_name, password } = req.body

        if (user_name && password) {

            var results = await knex('users').where({
                user_name: user_name,
                password: password
            })

            if (results.length > 0) {

                //requisições do BD
                req.session.loggedin = true
                req.session.user_name = user_name
                user_name = req.session.user_name
                user_id = results[0].user_id

                //redirecionar para Logged com id
                res.redirect('http://localhost:3000/Logged/' + user_id)

                //Vizualizar User Logado
                dados_user = { user_id, user_name }
                console.log(dados_user)

                } else {
                    res.send(`  <script>

                                    alert('Nome e / ou password incorretos!'); 
                                    history.back();
                                    
                                </script>`)
                }

                res.end()
    }
}

module.exports = { auth_user }