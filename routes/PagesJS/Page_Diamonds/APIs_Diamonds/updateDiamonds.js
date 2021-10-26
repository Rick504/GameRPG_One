module.exports =  function ( app ) {

     app.get("/updateDiamonds", function(req,res){
            const addDiamantes = 20
            const diamantesAtual = parseInt(diamonds)  +  parseInt(addDiamantes)

            pool.query("UPDATE users SET diamonds = " + diamantesAtual + " WHERE id = $1",[user_id])

            diamonds = diamantesAtual
            dados_user.diamonds = diamantesAtual

            res.redirect('/Diamantes/'+ user_id)

        })
}



