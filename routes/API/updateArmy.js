module.exports =  function ( app ) {
    
     app.get("/updateArmy", function(req,res){
            var addArmy = 1
            var lessGold = 3
            var current_gold = parseInt(gold)  -  parseInt(lessGold)
            var current_army = parseInt(army)  +  parseInt(addArmy)

            sql.query("UPDATE users SET army = " + current_army +", gold = "+ current_gold +"  WHERE id = ?",[user_id])

            dados_user.army = current_army
            dados_user.gold = current_gold

            res.redirect('/Exercito/'+ user_id)

        })
}  
