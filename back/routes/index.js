const express = require('express');

const router = express.Router();

const oeuvres = require('./oeuvres');

router.use('/oeuvres', oeuvres);

module.exports = router;
