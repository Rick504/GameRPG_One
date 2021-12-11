const knex = require('../../models/config/conn_knex')

const del_user = async (req, res) => {
    if (req.session.loggedin == true) {

        const id = req.params.id

        await knex.where({id: id}).del().table('users')

        res.redirect('/')
    }
}

module.exports = { del_user }