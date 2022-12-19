const knex = require('../../config/conn_knex')

const auth_user = async (req, res) => {

        let { user_name, password } = req.body

        if (user_name && password) {

            var Banco = await knex('users').where({
                user_name: user_name,
                password: password
            })

            if (Banco.length > 0) {

                //Session Express
                req.session.loggedin = true
                req.session.username = user_name
                console.log(req.session)

                user_id = Banco[0].user_id

                //redirecionar para Logged
                res.render('home.handlebars')
                } else {
                    res.render('index.handlebars')
                }

                res.end()

    }
}

module.exports = { auth_user }
