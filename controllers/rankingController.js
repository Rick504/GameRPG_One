const knex = require('../models/config/conn_knex')

const allPlayers = async (req, res) => {
    
    const rows = await knex.column('u_name', 'gold').select().from('users')
    
    rows.sort((a, b) => {
        return b.gold - a.gold
     })

    res.send(rows)
}

module.exports = { allPlayers }