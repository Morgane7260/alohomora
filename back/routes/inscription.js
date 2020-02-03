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

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO users SET ?', [formData], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la saisie d'un utilisateur.");
    } else {
      results.sendStatus(200);
    }
  });
});

module.exports = router;
