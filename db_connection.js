// Configure Environemnt Variables
require('dotenv').config();

var mysql = require('mysql');

// Setup MySQL Connection
var connectionDetails = mysql.createConnection({
    host: "127.0.0.1",
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

// Attempt Connection
connectionDetails.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});