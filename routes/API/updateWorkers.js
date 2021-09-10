module.exports =  function ( app ) {

    apiSecret = process.env.API_ROTA_URL_UPDATE_WORKERS

      app.get(apiSecret, function(req,res){
            const [less_worker, add_worker_gold, add_worker_supplies, add_worker_wood] = [1, 1, 5, 3]
            const current_worker = parseInt(workers)  -  parseInt(less_worker)

            sql.query("UPDATE users SET workers = " + current_worker + ", workers = " + current_worker + " WHERE id = ?",[user_id])

            workers = current_worker
            dados_user.workers = current_worker

            res.redirect('/Trabalhadores/'+ user_id)

        })
}