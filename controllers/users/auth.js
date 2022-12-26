const knex = require('../../config/conn_knex')

const auth_user = async (req, res) => {

        let { user_name, password } = req.body

        if (user_name && password) {

            var db = await knex('users').where({
                user_name: user_name,
                password: password
            })

            if (db.length > 0) {

                //Session Express
                req.session.loggedin = true
                req.session.username = user_name
                req.session.userId = db[0].user_id

                //redirecionar para home
                res.redirect('/home')
                } else {
                    res.redirect('/?fail=true')
                }
                res.end()
    }
}

module.exports = { auth_user }
