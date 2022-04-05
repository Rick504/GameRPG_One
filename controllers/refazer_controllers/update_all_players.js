const knex = require('../../models/config/conn_knex')

module.exports = () => {

    setInterval(async () => {

        for (let index = 0; index < 5000; index++) {
                        
            var players = await knex('users').where({ id: index })

                players.forEach(async element => {
                    
                    var sum_gold = parseInt(element.gold) + parseInt(element.worker_producing_gold)
                    var sum_supplies = parseInt(element.supplies) + parseInt(element.worker_producing_supplies)
                    var sum_wood = parseInt(element.wood) + parseInt(element.worker_producing_wood)

                    var current_gold = sum_gold.toString()
                    var current_supplies = sum_supplies.toString()
                    var current_wood = sum_wood.toString()
    
                    await knex('users').where({ id: index })
                                .update({ 
                                    gold: current_gold, 
                                    supplies: current_supplies,
                                    wood: current_wood,
                                })
                })
            }

    }, 10000)
}