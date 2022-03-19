const knex = require('../config/conn_knex')

const rakingFunc = async (req, res) => {

    var rows = await knex('users').column('u_name', 'gold')

    await rows.sort((a, b) => {
        return b.gold - a.gold
     })

    await res.send(rows)
}

module.exports = { rakingFunc }