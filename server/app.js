const express = require('express');
const app = express();
const notesRoutes = require('./api/notes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/notes', notesRoutes);

module.exports = app