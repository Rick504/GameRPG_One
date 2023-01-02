const knex = require('../../config/conn_knex')
const bcrypt = require('bcrypt')

const auth = async (req, res) => {

        try {
            let session = req.session
            let { user_name, password } = req.body

            if (user_name && password) {

                var dbUser = await knex('users').where({ user_name: user_name }) // ou E-mail
                                                .innerJoin('info_game', 'users.user_id', 'info_game.id')
                                                .column(
                                                        'user_id',
                                                        'user_name',
                                                        'email',
                                                        'password',
                                                        'origin',
                                                        'gold',
                                                        'supplies',
                                                        'wood',
                                                        'worker_producing_gold',
                                                        'worker_producing_supplies',
                                                        'worker_producing_wood',
                                                        'workers',
                                                        'level',
                                                        'clan'
                                                    )
                let user = dbUser[0]

                if (!dbUser.length > 0) {
                    res.redirect('/?userNotExist=true')
                } else {
                    let isValidPassword = bcrypt.compareSync(password, user.password)

                    if (isValidPassword) {

                        //Session Express
                        session.authorized = true
                        session.user = user

                        console.log('user',session)

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
