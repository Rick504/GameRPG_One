module.exports =  function ( app ) {

    apiSecret = process.env.API_ROTA_URL_UPDATE_WORKERS_PURCHASE_GOLD
    
    app.get(apiSecret, function(req,res){
      if (workers >= 0 && gold >= 2 && supplies >= 13) {
      
          //variaveis de atualização
          const less_gold = 2
          const less_supplies = 13
          const add_worker = 1

          const current_worker = parseInt(workers)  +  parseInt(add_worker)
          const current_gold = parseInt(gold)  -  parseInt(less_gold)
          const current_supplies = parseInt(supplies)  -  parseInt(less_supplies)


          //Update Mysql
          sql.query("UPDATE users SET workers="+current_worker+", gold="+current_gold+", supplies ="+current_supplies+"  WHERE id = ?",[user_id])


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
        }
  
      })
}