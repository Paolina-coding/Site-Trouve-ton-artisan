require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); 
app.use(express.json());

const indexRouter = require('./routes/index.js');
app.use('/', indexRouter);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => { console.log(`Serveur Express démarré sur le port ${PORT}` ); });

module.exports = app;