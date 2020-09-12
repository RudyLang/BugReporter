require('dotenv').config();

const mysql = require('mysql');
const express = require('express');
const app = express();

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