const { Pool } = require("pg/lib")

module.exports =  function ( app ) {

     app.get("/updateArmy", function(req,res){
            if (gold >= 50) {
                const addArmy = 1
                const lessGold = 50
                const current_gold = parseInt(gold)  -  parseInt(lessGold)
                const current_army = parseInt(army)  +  parseInt(addArmy)

                conn.query("UPDATE users SET army = " + current_army +", gold = "+ current_gold +"  WHERE id = $1",[user_id])

                //atualizando results do BD
                army = current_army
                gold = current_gold

                //atualizando handlebars
                dados_user.army = current_army
                dados_user.gold = current_gold

                res.redirect('/Exercito/'+ user_id)
            }

        })
}
