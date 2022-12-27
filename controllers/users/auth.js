const knex = require('../../config/conn_knex')
const bcrypt = require('bcrypt')

const auth_user = async (req, res) => {

        let { user_name, password } = req.body

        if (user_name && password) {

            var dbUser = await knex('users').where({ user_name: user_name, }) // ou E-mail
            let userData = dbUser[0]

            if (!dbUser.length > 0) {
                res.redirect('/?userNotExist=true')
            } else {
                let isValidPassword = bcrypt.compareSync(password, userData.password)

                if (isValidPassword) {

                    //Session Express
                    req.session.loggedin = true
                    req.session.username = user_name
                    req.session.userId = userData.user_id

                    //redirecionar para home
                    res.redirect('/home')
                    } else {
                        res.redirect('/?fail=true')
                    }
            }

        res.end()
    }
}

module.exports = { auth_user }
