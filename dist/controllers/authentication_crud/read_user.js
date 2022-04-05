const knex = require('../../config/conn_knex')

const read_user = async (req, res) => {

    if (req.session.cookie._expires !== null && req.session.cookie.key === "is8-2inD-a83-dhuw-de") {
            
        try {

        var rows = await knex('users')
                            .innerJoin('info_game', 'users.user_id', 'info_game.id_info_game')
                            .where({user_id: user_id})
                            .column(
                                'user_name', 
                                'gold', 
                                'supplies',
                                'wood', 
                                'origin',
                                'worker_producing_gold',
                                'worker_producing_supplies',
                                'worker_producing_wood',
                                'workers',
                                'level',
                                'clan'
                                )
                            
                                
         await res.status(200).send(rows[0])

    } catch (error) {

        res.status(404).json({ error: error })

    }
}

}

module.exports = { read_user }