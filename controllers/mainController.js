const knex = require('../models/config/conn_knex')

const mainFunc = async (req, res) => {

    var rows = await knex('users')
                        .column(
                            'u_name', 
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

module.exports = { mainFunc }