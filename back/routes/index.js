const express = require('express');

const router = express.Router();

const oeuvres = require('./oeuvres');
const personnages = require('./personnages');
const inscription = require('./inscription');

router.use('/personnages', personnages);
router.use('./inscription', inscription);
router.use('/oeuvres', oeuvres);

module.exports = router;
