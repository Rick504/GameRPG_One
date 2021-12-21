const knex = require('../models/config/conn_knex')

//comprar trabalhadores
const workers_purchase_gold = async (req,res,next) => {

   var user = await knex('users').where({id: user_id}).column('gold', 'supplies','workers')

    var gold = user[0].gold
    var supplies = user[0].supplies
    var workers = user[0].workers

      if (workers >= 0 && gold >= 2 && supplies >= 13) {

          const less_gold = 2
          const less_supplies = 13
          const add_worker = 1

          const current_worker   =  parseInt(workers)   +  parseInt(add_worker)
          const current_gold     =  parseInt(gold)      -  parseInt(less_gold)
          const current_supplies =  parseInt(supplies)  -  parseInt(less_supplies)

          await knex('users').where({id: user_id})
                                .update({
                                    workers: current_worker,
                                    gold: current_gold,
                                    supplies: current_supplies
                                })

        } 
}

//usar em gold
const updateWorkers_gold = async (req,res) => {

    var user = await knex('users').where({id: user_id}).column('workers', 'worker_producing_gold')

    var workers = user[0].workers
    var worker_producing_gold = user[0].worker_producing_gold

  if (workers > 0) {

      add_gold = '1'

      const current_worker =  parseInt(workers)  -  parseInt(1)
      const current_gold   =  parseInt(worker_producing_gold)  +  parseInt(add_gold)


      await knex('users').where({id: user_id})
                            .update({
                                workers: current_worker,
                                worker_producing_gold: current_gold
                            })

    }
}

// //usar em supplies
const updateWorkers_supplies = async (req,res) => {

    var user = await knex('users').where({id: user_id}).column('workers', 'worker_producing_supplies')

    var workers = user[0].workers
    var worker_producing_supplies = user[0].worker_producing_supplies

  if (workers > 0) {

      add_supplies = '8'

      const current_worker   = parseInt(workers)  -  parseInt(1)
      const current_supplies = parseInt(worker_producing_supplies)  +  parseInt(add_supplies)

      await knex('users').where({id: user_id})
                            .update({
                                workers: current_worker,
                                worker_producing_supplies: current_supplies
                            })

    } 
}

// //usar em wood
const updateWorkers_wood = async (req,res) => {

    var user = await knex('users').where({id: user_id}).column('workers', 'worker_producing_wood')

    var workers = user[0].workers
    var worker_producing_wood = user[0].worker_producing_wood

  if (workers > 0) {

      add_wood = '5'

      const current_worker = parseInt(workers)  -  parseInt(1)
      const current_wood   = parseInt(worker_producing_wood)  +  parseInt(add_wood)

      await knex('users').where({id: user_id})
                            .update({
                                workers: current_worker,
                                worker_producing_wood: current_wood
                            })
    } 
}

//exportar tudo
module.exports = {
  workers_purchase_gold, 
  updateWorkers_gold,
  updateWorkers_supplies,
  updateWorkers_wood
}