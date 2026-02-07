const express = require('express');
const router = express.Router();

const controller = require('../controllers/artisan.controller');

router.get('/top', controller.getTopArtisans);
router.get('/categorie/:id', controller.getArtisansByCategorie);
router.get('/search/:nom', controller.getArtisansByName);

module.exports = router;