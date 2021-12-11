const knex = require('../config/conn_knex')


var gold, supplies, wood

setInterval(() => {
  
    knex('users')
        .then(data => { data.map((item) => {

            return  gold = item.gold, 
                    supplies = item.supplies,
                    wood = item.wood
            
        })

    })

}, 2)

setInterval(() => {

    exports.supplies = supplies,
    exports.gold = gold,
    exports.wood = wood

}, 1)
