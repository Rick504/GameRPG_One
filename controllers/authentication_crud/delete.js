const knex = require('../../config/conn_knex')

const del_user = async (req, res) => {
    
    if (req.session.loggedin === true) {

        await knex('users').where({id: user_id}).del()

        res.redirect('/')
    }
}

module.exports = { del_user }