const express = require('express');

const router = express.Router();

const oeuvres = require('./oeuvres');
const personnages = require('./personnages');

router.use('/personnages', personnages);
router.use('/oeuvres', oeuvres);

module.exports = router;
