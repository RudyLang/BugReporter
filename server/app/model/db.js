require('dotenv').config();

const mysql = require('mysql');

// Setup MySQL Connection
var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: 'bugs'
});

// Attempt Connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

module.exports = connection;