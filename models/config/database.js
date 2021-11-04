const Pool = require("pg").Pool;

conn = new Pool({
    user: "postgres",
    host: "db",
    database: "First_game",
    password: "123",
    port: 5432,
});

module.exports = { conn }
