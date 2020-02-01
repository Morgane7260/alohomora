import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./oeuvres.css";
import Nav from "../Acceuil/Nav";
import Footer from "../Acceuil/Footer";

class Oeuvres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oeuvres: []
    };
  }

  componentDidMount() {
    axios
      .get("/alohomora/oeuvres")
      .then(res => res.data)
      .then(response => {
        this.setState({
          oeuvres: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { oeuvres } = this.state;
    return (
      <div className="oeuvres-grid">
        <Nav />
        <h1 className="oeuvres-titre">Livres</h1>
        <div className="oeuvres-contain">
          {oeuvres.map((oeuvre, id) => (
            <div className="oeuvres-card" key={id}>
              <img
                src={oeuvre.image}
                alt={oeuvre.nom}
                className="oeuvres-image"
              />
              <div className="oeuvres-card-body">
                <h2>{oeuvre.nom}</h2>
                <p className="oeuvres-card-soustitre">{oeuvre.autre}</p>
                <p className="oeuvres-card-resume">{oeuvre.résumé}</p>
              </div>
                <Link to={`/alohomora/oeuvres/${id}`}>
                  <button className="oeuvres-button">Clique pas y'a R</button>
                </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Oeuvres;
