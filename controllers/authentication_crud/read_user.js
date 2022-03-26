const knex = require('../../config/conn_knex')

const read_user = async (req, res) => {

    var rows = await knex('users')
                        .where({user_id: user_id})
                        .column(
                            'user_name', 
                            'gold', 
                            'supplies',
                            'wood', 
                            'origin',
                            'worker_producing_gold',
                            'worker_producing_supplies',
                            'worker_producing_wood',
                            'workers',
                            'level',
                            'clan'
                            )
                            
    await res.send(rows[0])
}

module.exports = { read_user }