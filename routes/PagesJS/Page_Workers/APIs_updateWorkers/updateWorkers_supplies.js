module.exports =  function ( app ) {
    
    app.get("/updateWorkers_supplies", function(req,res){
      if (workers > 0) {
      
          //variaveis de atualização
          const less_worker = 1
          const add_supplies = 8

          const current_worker = parseInt(workers)  -  parseInt(less_worker)
          const current_supplies = parseInt(worker_producing_supplies)  +  parseInt(add_supplies)


          //Update Mysql
          pool.query("UPDATE users SET workers = " + current_worker + ", worker_producing_supplies = " + current_supplies + " WHERE id = $1",[user_id])

          // variaveis do Banco
          worker_producing_supplies = current_supplies
          workers = current_worker

          //handlebars
          dados_user.worker_producing_supplies = current_supplies
          dados_user.workers = current_worker
          
          res.redirect('/Trabalhadores/'+ user_id)
        } else {
          const zero = 0

          pool.query("UPDATE users SET workers = " + zero + " WHERE id = $1",[user_id])
        }
  
      })
}