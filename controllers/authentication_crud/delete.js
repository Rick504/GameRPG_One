const knex = require('../../models/config/conn_knex')

const del_user = async (req, res) => {
    if (req.session.loggedin == true) {

        const id = req.params.id

        await knex('users').where({id: id}).del()

        res.redirect('/')
    }
}

module.exports = { del_user }