const knex = require('../config/conn_knex')

//comprar trabalhadores
const buy_workers = async (req,res,next) => {

    var user = await knex('users').where({id: user_id}).column('gold', 'supplies','workers','origin')

    function verification_origin () {
        switch (user[0].origin) {

            case 'Magic':
                origin_magic()
                break;
            
            case 'Researcher':
                origin_researcher()
                break;
        
            case 'War':
                origin_war()
                break;
        }
    }

    verification_origin()

    async function origin_magic() {

        var gold = user[0].gold
        var supplies = user[0].supplies
        var workers = user[0].workers
    
          if (workers >= 0 && gold >= 2 && supplies >= 13) {
    
                const [less_gold, less_supplies, add_worker] = [3, 12, 1]
        
                const current_worker   =  parseInt(workers)   +  parseInt(add_worker)
                const current_gold     =  parseInt(gold)      -  parseInt(less_gold)
                const current_supplies =  parseInt(supplies)  -  parseInt(less_supplies)
        
                const result = await knex('users').where({id: user_id})
                                        .update({
                                            workers: current_worker,
                                            gold: current_gold,
                                            supplies: current_supplies
                                        })
                return result

            }  else {
                res.send(`  <script> 

                                alert ('Sem Saldo para compra de trabalhadores'); 
                                history.back();
                                
                            </script>`)
            }

    }

    async function origin_researcher() {

        var gold = user[0].gold
        var supplies = user[0].supplies
        var workers = user[0].workers
    
          if (workers >= 0 && gold >= 2 && supplies >= 13) {
    
                const [less_gold, less_supplies, add_worker] = [2, 13, 1]

                const current_worker   =  parseInt(workers)   +  parseInt(add_worker)
                const current_gold     =  parseInt(gold)      -  parseInt(less_gold)
                const current_supplies =  parseInt(supplies)  -  parseInt(less_supplies)

                const result = await knex('users').where({id: user_id})
                                    .update({
                                        workers: current_worker,
                                        gold: current_gold,
                                        supplies: current_supplies
                                    })
                return result

            } else {
                res.send(`  <script> 

                                alert ('Sem Saldo para compra de trabalhadores'); 
                                history.back();
                                
                            </script>`)
            }

            
    }

    async function origin_war() {

        var gold = user[0].gold
        var supplies = user[0].supplies
        var workers = user[0].workers
    
          if (workers >= 0 && gold >= 2 && supplies >= 13) {
    
                const [less_gold, less_supplies, add_worker] = [4, 15, 1]
        
                const current_worker   =  parseInt(workers)   +  parseInt(add_worker)
                const current_gold     =  parseInt(gold)      -  parseInt(less_gold)
                const current_supplies =  parseInt(supplies)  -  parseInt(less_supplies)
        
                const result = await knex('users').where({id: user_id})
                                        .update({
                                            workers: current_worker,
                                            gold: current_gold,
                                            supplies: current_supplies
                                        })

                return result   

            }  else {
                res.send(`  <script> 

                                alert ('Sem Saldo para compra de trabalhadores'); 
                                history.back();
                                
                            </script>`)
            }
    }
}

//usar em gold
const buy_worker_producing_gold = async (req,res,next) => {

    var user = await knex('users').where({id: user_id}).column('workers', 'worker_producing_gold')

    var workers = user[0].workers
    var worker_producing_gold = user[0].worker_producing_gold

        if (workers > 0) {

            add_gold = '1'

                const current_worker =  parseInt(workers)  -  parseInt(1)
                const current_gold   =  parseInt(worker_producing_gold)  +  parseInt(add_gold)


                const result = await knex('users').where({id: user_id})
                                        .update({
                                            workers: current_worker,
                                            worker_producing_gold: current_gold
                                        })

                return result
                    
            } else {
                res.send(`  <script> 

                                alert ('Sem Trabalhadores'); 
                                history.back();

                            </script>`)
            }
}

// //usar em supplies
const buy_updateWorkers_supplies = async (req,res,next) => {

    var user = await knex('users').where({id: user_id}).column('workers', 'worker_producing_supplies')

    var workers = user[0].workers
    var worker_producing_supplies = user[0].worker_producing_supplies

        if (workers > 0) {

                add_supplies = '8'

                const current_worker   = parseInt(workers)  -  parseInt(1)
                const current_supplies = parseInt(worker_producing_supplies)  +  parseInt(add_supplies)

                const result = await knex('users').where({id: user_id})
                                        .update({
                                            workers: current_worker,
                                            worker_producing_supplies: current_supplies
                                        })
                return result

            } else {
                res.send(`  <script> 

                                alert ('Sem Trabalhadores'); 
                                history.back();
                                
                            </script>`)
            }
}

// //usar em wood
const buy_updateWorkers_wood = async (req,res,next) => {

    var user = await knex('users').where({id: user_id}).column('workers', 'worker_producing_wood')

    var workers = user[0].workers
    var worker_producing_wood = user[0].worker_producing_wood

        if (workers > 0) {

            add_wood = '5'

            const current_worker = parseInt(workers)  -  parseInt(1)
            const current_wood   = parseInt(worker_producing_wood)  +  parseInt(add_wood)

            const result = await knex('users').where({id: user_id})
                                    .update({
                                        workers: current_worker,
                                        worker_producing_wood: current_wood
                                    })
                return result

            } else {
                res.send(`  <script> 

                                alert ('Sem Trabalhadores'); 
                                history.back();
                                
                            </script>`)
            }
}

//exportar tudo
module.exports = {
    buy_workers, 
    buy_worker_producing_gold,
    buy_updateWorkers_supplies,
    buy_updateWorkers_wood
}