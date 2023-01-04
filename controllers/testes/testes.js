const knex = require('../../config/conn_knex')

const testes = async (req, res) => {

    const rows = await knex('users')
                                    .innerJoin('preparing_workers', 'users.user_id', 'preparing_workers.id')
                                // .innerJoin('info_game', 'users.user_id', 'info_game.id')
    res.send(rows)
}

module.exports = { testes }
