const knex = require('../../config/conn_knex')

const auth_user = async (req, res) => {
        
        let { u_name, password } = req.body

        if (u_name && password) {

            var results = await knex('users').where({
                u_name: u_name,
                password: password
            })

            if (results.length > 0) {

                //requisições do BD
                req.session.loggedin = true
                req.session.u_name = u_name
                t_name = req.session.u_name
                
                //pegando Id do Usuario
                user_id = results[0].id

                //redirecionar para Logged com id
                res.redirect('http://localhost:3000/Logged/' + user_id)

                //Objeto Handlebars
                dados_user = { user_id, t_name }

                //Vizualizar User Logado
                console.table(dados_user)

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