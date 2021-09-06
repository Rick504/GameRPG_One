module.exports =  function ( app ) {

    apiSecret = process.env.API_ROTA_URL_DIAMONDS

     app.get(apiSecret, function(req,res){
            const addDiamantes = 20
            const diamantesAtual = parseInt(diamonds)  +  parseInt(addDiamantes)

            sql.query("UPDATE users SET diamonds = " + diamantesAtual + " WHERE id = ?",[user_id])

            diamonds = diamantesAtual
            dados_user.diamonds = diamantesAtual

            res.redirect('/Diamantes/'+ user_id)

        })
}



