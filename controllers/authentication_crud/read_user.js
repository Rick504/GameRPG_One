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
                            'workers'
                            )

    await res.send(rows)
}

module.exports = { read_user }