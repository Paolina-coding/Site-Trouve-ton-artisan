require('dotenv').config();

const express = require('express');
const app = express();

const indexRouter = require('./routes/index.js');

app.use('/', indexRouter);

app.listen(3000, () => { console.log("Serveur Express démarré sur http://localhost:3000"); });

module.exports = app;