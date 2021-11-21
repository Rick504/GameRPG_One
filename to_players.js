const knex = require('./models/config/conn_knex')

module.exports = (app) => {

    setInterval(async () => {

            await knex('users')
        
        // await knex.where()
        //     .update({
        //         gold: currint_gold,
        //         supplies: currint_supplies,
        //         wood: currint_wood
        //     }).table('users')


    }, 5000)

}