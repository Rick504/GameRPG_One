const armys_update = (req,res) => {

    if (supplies >= 50) {

        const addArmy = 1
        const less_supplies = 33
        const current_supplies = parseInt(supplies)  -  parseInt(less_supplies)
        const current_army = parseInt(army)  +  parseInt(addArmy)

        conn.query("UPDATE users SET army = " + current_army +", supplies = "+ current_supplies +"  WHERE id = $1",[user_id])

        //atualizando results do BD
            army = current_army
            supplies = current_supplies

            //atualizando handlebars
            dados_user.army = current_army
            dados_user.supplies = current_supplies

            res.redirect('/Exercito/'+ user_id)
        }
    }

module.exports = {armys_update}