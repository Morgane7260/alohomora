import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.jpg";
import './accueil.css';

function Nav() {
  return (
    <div className="contain">
      <Link to="/alohomora"><img src={logo} alt="logo du site" className="logo"/></Link>
      <ul className="liens">
          <Link to="/alohomora/JKRowling" className="lien">Qui est J.K.Rowling ?</Link>
        <Link to="/alohomora/oeuvres" className="lien">Oeuvres</Link>
        <Link to="/personnages" className="lien">Personnages</Link>
        <Link to="/actualites" className="lien">Actualités</Link>
        <Link to="/connection" className="lien">Connexion</Link>
      </ul>
    </div>
  );
}

export default Nav;