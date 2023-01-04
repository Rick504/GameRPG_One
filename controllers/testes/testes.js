const knex = require('../../config/conn_knex')

const testes = async (req, res) => {

    const rows = await knex('users')
    res.send(rows)
}

module.exports = { testes }
