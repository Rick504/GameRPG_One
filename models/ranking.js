const knex = require('../models/config/conn_knex')

var res
    
    knex('users')
        .column('u_name', 'gold')
        .then(data => {
            return res = data
        })


setInterval(() => {

    exports.rows = res

}, 1)   