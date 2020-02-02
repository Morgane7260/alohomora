const express = require('express');

const router = express.Router();

const oeuvres = require('./oeuvres');
const inscription = require('./inscription');

router.use('./inscription', inscription);
router.use('/oeuvres', oeuvres);

module.exports = router;
