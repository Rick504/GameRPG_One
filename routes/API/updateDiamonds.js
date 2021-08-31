module.exports =  function ( app ) {
    
     app.get("/updateDiamonds", function(req,res){
            var addDiamantes = 20
            var diamantesAtual = parseInt(diamonds)  +  parseInt(addDiamantes)

            sql.query("UPDATE users SET diamonds = " + diamantesAtual + " WHERE id = ?",[user_id])

            dados_user.diamonds = diamantesAtual

            res.redirect('/Diamantes/'+ user_id)

        })
}  



