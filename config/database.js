const Pool = require("pg").Pool;

global.conn = new Pool({
    user: "postgres",
    host: "db",
    database: "First_game",
    password: "123",
    port: 5432,
});
