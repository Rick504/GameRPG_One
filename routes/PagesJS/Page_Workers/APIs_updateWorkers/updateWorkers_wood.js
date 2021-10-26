module.exports =  function ( app ) {

    app.get("/updateWorkers_wood", function(req,res){
      if (workers > 0) {

          //variaveis de atualização
          const less_worker = 1
          const add_wood = 5

          const current_worker = parseInt(workers)  -  parseInt(less_worker)
          const current_wood = parseInt(worker_producing_wood)  +  parseInt(add_wood)


          //Update Mysql
          conn.query("UPDATE users SET workers = " + current_worker + ", worker_producing_wood = " + current_wood + " WHERE id = $1",[user_id])

          // variaveis do Banco
          worker_producing_wood = current_wood
          workers = current_worker

          //handlebars
          dados_user.worker_producing_wood = current_wood
          dados_user.workers = current_worker

          res.redirect('/Trabalhadores/'+ user_id)

        } else {
          const zero = 0

          conn.query("UPDATE users SET workers = " + zero + " WHERE id = $1",[user_id])
        }

      })
}