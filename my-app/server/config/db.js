const mysql = require("mysql");

const db = mysql.createPool({
  host: "52.14.145.195",
  port: "3306",
  user: "seon",
  password: "1234",
  database: "testDB",
});

module.exports = db;
