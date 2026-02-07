const express = require('express');
const router = express.Router();

const artisanRoute = require('./artisan');

router.use('/artisan', artisanRoute);

module.exports = router;