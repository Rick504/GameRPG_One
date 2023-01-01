const knex = require('../../config/conn_knex')
const bcrypt = require('bcrypt')

const auth = async (req, res) => {

        try {
            let session = req.session
            let { user_name, password } = req.body

            if (user_name && password) {

                var dbUser = await knex('users').where({ user_name: user_name, }) // ou E-mail
                let user = dbUser[0]

                if (!dbUser.length > 0) {
                    res.redirect('/?userNotExist=true')
                } else {
                    let isValidPassword = bcrypt.compareSync(password, user.password)

                    if (isValidPassword) {

                        //Session Express
                        session.authorized = true
                        session.user = user

                        // console.log(session)
                        let teste = await knex('info_game')
                        console.log(teste)

                        //redirecionar para home
                        res.redirect('/home')
                    } else {
                        res.redirect('/?fail=true')
                    }
                }
            }
        } catch (err) {
            res.redirect('/')
        }
    res.end()
}

module.exports = { auth }
