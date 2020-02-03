const express = require('express');

const router = express.Router();

const oeuvres = require('./oeuvres');
const personnages = require('./personnages');
const inscription = require('./inscription');
const maisons = require('./maisons');
const types = require('./types');
const side = require('./side');

router.use('/side', side);
router.use('/types', types);
router.use('/maisons', maisons);
router.use('/personnages', personnages);
router.use('./inscription', inscription);
router.use('/oeuvres', oeuvres);

module.exports = router;
