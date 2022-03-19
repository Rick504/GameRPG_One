const knex = require('../../config/conn_knex')

const insert_user = async (req, res) => {

        const dados_user = {
            u_name: req.body.u_name,
            email: req.body.email,
            password: req.body.password,
            origin: req.body.origin,
        }

        await knex('users').insert(dados_user)

        res.redirect('http://localhost:3000/registration_performed')

        console.log(dados_user)
    }


module.exports = { insert_user }
