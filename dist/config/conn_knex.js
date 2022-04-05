const knex = require('knex')({
    client: 'pg',
    connection: {
        user: "postgres",
        host: "db",
        database: "First_game",
        password: "123",
      //port: 5432,
    }
})

module.exports = knex