const knex = require('../../config/conn_knex')

const testes = async (req, res) => {

    try {
        const rows = await knex('users')
        res.send(rows)

    } catch (err) {
        res.send('Erro testes')
    }

}

module.exports = { testes }
