const express = require('express');
const router = express.Router();

const controller = require('../controllers/artisan.controller');

router.get('/top', controller.getTop);
router.get('/categorie/:id', controller.getByCategorie);
router.get('/search', controller.search);

module.exports = router;