const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
});
pool.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected.................................");
  }
});

module.exports = pool