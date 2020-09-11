const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: 'node_project_m10120'
});

module.exports = pool.promise();