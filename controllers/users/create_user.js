const knex = require('../../config/conn_knex')

const create_user = async (req, res) => {

        const data_user = {
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            origin: req.body.origin,
        }

        await knex('users').insert(data_user)
        // await knex('info_game').insert({level: 1})

        req.session.loggedin = true
        req.session.username = data_user.user_name

        // res.redirect(`/home/${data_user.user_name}`)

        console.log('Registered user: ')
        console.log(data_user.user_name)
    }


module.exports = { create_user }
