const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: 5432,
  database: process.env.DB_NAME,
});

module.exports = pool;
