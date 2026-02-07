const express = require('express');
const app = express();

const indexRouter = require('./routes/index.js');
const artisanRouter = require('./routes/artisan.js');

app.use('/', indexRouter);
app.use('/artisan', artisanRouter);

module.exports = app;