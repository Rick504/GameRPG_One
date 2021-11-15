const knex = require('../models/config/conn_knex')

const allPlayers = async (req, res) => {
    if (req.session.loggedin == true) {

        const columns = await knex.column('u_name', 'gold').select().from('users').orderBy('gold')

        const c = columns.map((columns, indice) => {
            return indice + 1 + '  -  ' + columns.u_name + '  Pontos: ' + columns.gold
        })

        dados_user.ranking = c.join('\t')

        res.render('Ranking', { data: dados_user })
    }
}

module.exports = { 
    allPlayers
 }