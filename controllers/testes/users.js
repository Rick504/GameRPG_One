const knex = require('../../config/conn_knex')

const users = async (req, res) => {

    const rows = await knex('info_game')
    res.send(rows)
}

module.exports = { users }
