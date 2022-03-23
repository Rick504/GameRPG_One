const knex = require('../../config/conn_knex')

const create_user = async (req, res) => {

        const data_user = {
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            origin: req.body.origin,
        }

        await knex('users').insert(data_user)

        res.redirect('http://localhost:3000/registration_performed')

        console.log('Registered user: ')
        console.log(data_user)
    }


module.exports = { create_user }
