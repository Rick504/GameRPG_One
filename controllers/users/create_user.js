const knex = require('../../config/conn_knex')
const bcrypt = require('bcrypt')

const create_user = async (req, res) => {

        try {
            const hashPassword = await bcrypt.hash(req.body.password, 10)

            const data_user = {
                user_name: req.body.user_name,
                email: req.body.email,
                password: hashPassword,
                origin: req.body.origin,
            }

            await knex('users').insert(data_user)
            // await knex('info_game').insert({level: 1})

            req.session.loggedin = true
            req.session.username = data_user.user_name

            res.redirect('/home')

            console.log('Registered user: ')
            console.log(data_user.user_name)

        } catch (err) {
            res.redirect('/')
        }

    }


module.exports = { create_user }
