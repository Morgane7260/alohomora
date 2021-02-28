const express = require('express');

const router = express.Router();
const connection = require('../conf');

router.get('/', (req, res) => {
  connection.query(
    'SELECT p.image, p.nom, p.acteur, p.side_id, p.type_id, p.maison_id, m.nom AS maison, s.nom AS side, t.type FROM personnage AS p JOIN maison AS m ON m.id=p.maison_id JOIN type AS t ON p.type_id = t.id JOIN side AS s ON s.id=p.side_id',
    (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des personnages');
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
