import React, { Component } from "react";
import axios from "axios";

class Actualites extends Component {
  constuctor(props) {
    super(props);
    this.state = {
      actualites: [],
      titre: "",
      contenu: "",
      date: "",
      image: "",
      autre: ""
    };
  }

  componentDidMount() {
    axios
      .get("/alohomora/acutalites")
      .then(response => response.data)
      .then(response => {
        this.setState({
          actualites: response
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="actu-contain">
        {actualites.map((actu, id) => {
          <div className="actu-card" key={id}>
            <img src={actu.image} alt={actu.titre} />
            <h1>{actu.titre}</h1>
            <p>{actu.contenu}</p>
            <p>{actu.date}</p>
            <p>{actu.autre}</p>
          </div>;
        })}
      </div>
    );
  }
}

export default Actualites;
