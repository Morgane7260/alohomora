import React, { Component } from "react";
import Nav from "../Acceuil/Nav";
import axios from "axios";
import Footer from "../Acceuil/Footer";
import './personnages.css';

class Personnages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personnages: [],
      filteredByHouse: "None",
      filteredByType: "None",
      filteredBySide: "None"
    };
  }

  componentDidMount() {
    axios
      .get("/alohomora/personnages")
      .then(res => res.data)
      .then(response => {
        this.setState({
          personnages: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { personnages } = this.state;
    return (
      <div className="persos-grid">
        <Nav />
        <div className="persos-contain">
          <h1>Les personnages</h1>
          <div className="persos">
            {personnages.map((personnage, id) => (
              <div className="perso-card" key={id}>
                <img src={personnage.image} alt={personnage.nom} className="persos-image"/>
                <h1>{personnage.nom}</h1>
                <p><strong>Type: </strong>{personnage.type}</p>
                <p><strong>Côté: </strong>{personnage.side}</p>
                <p><strong>Maison: </strong>{personnage.maison}</p>
                <p><strong>Acteur: </strong>{personnage.acteur}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Personnages;