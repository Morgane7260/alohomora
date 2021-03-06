const express = require('express');

const router = express.Router();
const connection = require('../conf');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM maison', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des maisons');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
