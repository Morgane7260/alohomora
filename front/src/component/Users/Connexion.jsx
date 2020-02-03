import React, { Component } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from "axios";
import { Link } from "react-router-dom";
import "./inscription.css";
import Nav from "../Acceuil/Nav";
import Footer from "../Acceuil/Footer";

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async submitForm() {
    // e.preventDefault();
    const { name, password } = this.state;
    await axios
      .post("/alohomora/inscription", {
        name,
        password
      })
      .then(res => {
        if (res.error) {
          alert(res.error);
        }
      })
      .catch(e => {
        console.error(e);
        alert("nope");
      });
  }

  render() {
    return (
      <div className="users-grid">
        <Nav />
        <AvForm className="Form_Connexion" onSubmit={this.submitForm}>
          <div className="form">
            <AvField
              name="name"
              type="name"
              label="Pseudonyme :"
              onChange={this.onChange}
              value={this.state.name}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Entrez un pseudonyme ici"
                },
                pattern: {
                  value: "^[A-Za-z0-9]+$",
                  errorMessage:
                    "Votre nom ne peut contenir que des lettres et des chiffres"
                },
                minLength: {
                  value: 4,
                  errorMessage:
                    "Votre nom doit contenir au minimum 4 caractères"
                },
                maxLength: {
                  value: 16,
                  errorMessage: "Votre nom ne peut excéder 16 caractères"
                }
              }}
            />

            <AvField
              name="password"
              type="password"
              label="Mot de passe :"
              onChange={this.onChange}
              value={this.state.password}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Entrez un mot de passe ici"
                },
                pattern: {
                  value: "^[A-Za-z0-9]+$",
                  errorMessage:
                    "Votre mot de passe ne peut contenir que des lettres et des chiffres"
                },
                minLength: {
                  value: 8,
                  errorMessage:
                    "Votre mot de passe doit contenir au minimum 8 caractères"
                },
                maxLength: {
                  value: 30,
                  errorMessage:
                    "Votre mot de passe ne peut excéder 30 caractères"
                }
              }}
            />
          </div>
          <button className="users-button">Se connecter</button>
          <Link to="/alohomora/inscription">Vous n'avez pas encore de compte ?</Link>
        </AvForm>
        <Footer />
      </div>
    );
  }
}

export default Connexion;
