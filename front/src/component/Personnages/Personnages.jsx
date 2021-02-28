import React, { Component } from "react";
import axios from "axios";
import "./personnages.css";

class Personnages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personnages: []
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
    const {
      activeMaisonFilter,
      activeTypeFilter,
      activeSideFilter
    } = this.props;
    const { personnages } = this.state;
    const filteredPersonnages = personnages
      .filter(
        personnage =>
          !activeMaisonFilter || personnage.maison === activeMaisonFilter
      )
      .filter(
        personnage =>
          !activeTypeFilter || personnage.type === activeTypeFilter
      )
      .filter(
        personnage =>
          !activeSideFilter || personnage.side === activeSideFilter
      );
    return (
      <div className="persos-contain">
        <div className="persos">
          {filteredPersonnages.map((personnage, id) => (
            <div className="perso-card" key={id}>
              <img
                src={personnage.image}
                alt={personnage.nom}
                className="persos-image"
              />
              <h1>{personnage.nom}</h1>
              <p>
                <strong>Type: </strong>
                {personnage.type}
              </p>
              <p>
                <strong>Côté: </strong>
                {personnage.side}
              </p>
              <p>
                <strong>Maison: </strong>
                {personnage.maison}
              </p>
              <p>
                <strong>Acteur: </strong>
                {personnage.acteur}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Personnages;
