module.exports =  function ( app ) {

    apiSecret = process.env.API_ROTA_URL_UPDATE_WORKERS_GOLD
    
    app.get(apiSecret, function(req,res){
      if (workers > 0) {
      
          //variaveis de atualização
          const less_worker = 1
          const add_gold = 1
          

          const current_worker = parseInt(workers)  -  parseInt(less_worker)
          const current_gold = parseInt(worker_producing_gold)  +  parseInt(add_gold)
          

          //Update Mysql
          sql.query("UPDATE users SET workers = " + current_worker + ", worker_producing_gold = " + current_gold + " WHERE id = ?",[user_id])

                
          // variaveis do Banco
          worker_producing_gold = current_gold
          workers = current_worker
          
                
          //handlebars
          dados_user.worker_producing_gold = current_gold
          dados_user.workers = current_worker
                
          
          res.redirect('/Trabalhadores/'+ user_id)
      
        } else {
          const zero = 0

          sql.query("UPDATE users SET workers = " + zero + " WHERE id = ?",[user_id])
        }
    })
}