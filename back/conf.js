const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // adresse du serveur
  user: 'groot', // le nom d'utilisateur
  password: 'azertyuiop', // le mot de passe
  database: 'HP' // le nom de la base de données
});

module.exports = connection;
