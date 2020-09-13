require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.listen(process.env.EXPRESS_PORT);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/routes');
routes(app); // Register the route