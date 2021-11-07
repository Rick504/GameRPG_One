const workers_purchase_gold = (req,res,next) => {
      if (workers >= 0 && gold >= 2 && supplies >= 13) {

          const less_gold = 2
          const less_supplies = 13
          const add_worker = 1

          const current_worker = parseInt(workers)  +  parseInt(add_worker)
          const current_gold = parseInt(gold)  -  parseInt(less_gold)
          const current_supplies = parseInt(supplies)  -  parseInt(less_supplies)

          conn.query(
          "UPDATE users SET workers = " + current_worker + 
          ", gold = " + current_gold + 
          ", supplies = " + current_supplies + 
          "  WHERE id = $1",[user_id])


          // variaveis do Banco
          workers = current_worker
          gold = current_gold
          supplies = current_supplies

          //handlebars
          dados_user.workers = current_worker
          dados_user.gold = current_gold
          dados_user.supplies = current_supplies

          res.redirect('/Trabalhadores/'+ user_id)

        } else {
            workers = workers
            gold = gold
            supplies= supplies

          res.redirect('/Trabalhadores/'+ user_id)
        }

}

const updateWorkers_gold = (req,res) => {
  if (workers > 0) {

      add_gold = '1'

      const current_worker = parseInt(workers)  -  parseInt(1)
      const current_gold = parseInt(worker_producing_gold)  +  parseInt(add_gold)


      conn.query(
        "UPDATE users SET workers = " + current_worker + 
        ", worker_producing_gold = " + current_gold +
        " WHERE id = $1",[user_id])


      // variaveis do Banco
      worker_producing_gold = current_gold
      workers = current_worker

      //handlebars
      dados_user.worker_producing_gold = current_gold
      dados_user.workers = current_worker

      res.redirect('/Trabalhadores/'+ user_id)

    } else {
      workers = workers
      gold = gold
      supplies = supplies
      wood = wood
    }

}

const updateWorkers_supplies = (req,res) => {
  if (workers > 0) {

      add_supplies = '8'

      const current_worker = parseInt(workers)  -  parseInt(1)
      const current_supplies = parseInt(worker_producing_supplies)  +  parseInt(add_supplies)


      conn.query(
        "UPDATE users SET workers = " + current_worker + 
        ", worker_producing_supplies = " + current_supplies + 
        " WHERE id = $1",[user_id])


      // variaveis do Banco
      worker_producing_supplies = current_supplies
      workers = current_worker

      //handlebars
      dados_user.worker_producing_supplies = current_supplies
      dados_user.workers = current_worker

      res.redirect('/Trabalhadores/'+ user_id)
    } else {
      workers = workers
      gold = gold
      supplies = supplies
      wood = wood
    }

}

const updateWorkers_wood = (req,res) => {
  if (workers > 0) {

      add_wood = '5'

      const current_worker = parseInt(workers)  -  parseInt(1)
      const current_wood = parseInt(worker_producing_wood)  +  parseInt(add_wood)


      conn.query(
        "UPDATE users SET workers = " + current_worker + 
        ", worker_producing_wood = " + current_wood + 
        " WHERE id = $1",[user_id])


      // variaveis do Banco
      worker_producing_wood = current_wood
      workers = current_worker

      //handlebars
      dados_user.worker_producing_wood = current_wood
      dados_user.workers = current_worker

      res.redirect('/Trabalhadores/'+ user_id)

    } else {
      workers = workers
      gold = gold
      supplies = supplies
      wood = wood
    }

}

module.exports = {
  workers_purchase_gold, 
  updateWorkers_gold,
  updateWorkers_supplies,
  updateWorkers_wood
}