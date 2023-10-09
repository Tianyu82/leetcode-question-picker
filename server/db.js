const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "asdf",
    host: "localhost",
    port: "5432",
    database: "leetcode_picker"
});

module.exports = pool;