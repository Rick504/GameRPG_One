module.exports =  function ( app ) {

    apiSecret = process.env.API_ROTA_URL_UPDATE_WORKERS_SUPPLIES
    
    app.get(apiSecret, function(req,res){
      if (workers > 0) {
      
          //variaveis de atualização
          const less_worker = 1
          const add_supplies = 8

          const current_worker = parseInt(workers)  -  parseInt(less_worker)
          const current_supplies = parseInt(worker_producing_supplies)  +  parseInt(add_supplies)


          //Update Mysql
          sql.query("UPDATE users SET workers = " + current_worker + ", worker_producing_supplies = " + current_supplies + " WHERE id = ?",[user_id])


          // variaveis do Banco
          worker_producing_supplies = current_supplies
          workers = current_worker


          //handlebars
          dados_user.worker_producing_supplies = current_supplies
          dados_user.workers = current_worker
          
          res.redirect('/Trabalhadores/'+ user_id)
        } else {
          const zero = 0

          sql.query("UPDATE users SET workers = " + zero + " WHERE id = ?",[user_id])
        }
  
      })
}