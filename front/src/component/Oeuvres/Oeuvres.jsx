import React, { Component } from "react";
import axios from "axios";
import "./oeuvres.css";
import Nav from "../Acceuil/Nav";
import Footer from "../Acceuil/Footer";
import { Modal } from "reactstrap";
import Commentaires from "./Commentaires";

class Oeuvres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oeuvres: [],
      modalIsOpen: false,
      openItem: null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal(oeuvreId) {
    this.setState({ modalIsOpen: true, openItem: oeuvreId });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { oeuvres, openItem, modalIsOpen } = this.state;
    return (
      <div className="oeuvres-grid">
        <Nav />
        <h1 className="oeuvres-titre">Livres</h1>
        <p className="to-comment">
          <a href="#Commentaires" className="a">Accéder aux commentaires</a>
          </p>
        <div className="oeuvres-contain">
          {oeuvres.map((oeuvre, id) => (
            <div className="button-end">
              <div className="oeuvres-card" key={id}>
                <img
                  src={oeuvre.image}
                  alt={oeuvre.nom}
                  className="oeuvres-image"
                />
                <h2 className="oeuvres-card-titre">{oeuvre.nom}</h2>
                <p className="oeuvres-card-soustitre">{oeuvre.autre}</p>
                <p className="oeuvres-card-resume">{oeuvre.résumé}</p>

                <button
                  key={id}
                  className="oeuvres-button"
                  onClick={() => this.openModal(oeuvre.id)}
                >
                  Clique pas y'a R
                </button>
                <Modal
                  className="oeuvres-modal"
                  isOpen={openItem === oeuvre.id ? modalIsOpen : false}
                >
                  <img
                    src={oeuvre.image}
                    alt={oeuvre.nom}
                    className="oeuvres-image-modal"
                  />
                  <h2>{oeuvre.nom}</h2>
                  <div>{oeuvre.résumé}</div>
                  <button className="oeuvres-button" onClick={this.closeModal}>
                    Fermer
                  </button>
                </Modal>
              </div>
            </div>
          ))}
        </div>
        <div className="Commentaires">
          <Commentaires />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Oeuvres;
