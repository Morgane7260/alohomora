const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../conf');

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

router.get('/', (req, res) => {
  connection.query(
    'SELECT c.name, c.texte, c.oeuvres_id, o.nom AS oeuvre FROM commentaires AS c JOIN oeuvres AS o ON o.id=c.oeuvres_id',
    (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des oeuvres');
      } else {
        res.json(results);
      }
    }
  );
});

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO commentaires SET ?', formData, err => {
    if (err) {
      res.status(500).send("Erreur lors de la saisie d'un commentaire.");
    } else {
      res.status(200);
    }
  });
});

module.exports = router;
