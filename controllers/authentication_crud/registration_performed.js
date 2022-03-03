const knex = require('../../models/config/conn_knex')

const insert_user = async (req, res) => {

        const dados_user = {
            u_name: req.body.u_name,
            email: req.body.email,
            password: req.body.password,
            origin: req.body.origin,
        }

        await knex('users').insert(dados_user)

        res.render('registration_performed', { layout: false })
    }


module.exports = { insert_user }
