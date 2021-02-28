import React, { Component } from "react";
import axios from "axios";
import "./commentaires.css";

class Commentaires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      oeuvres: [],
      name: "",
      texte: "",
      oeuvres_id: null
    };
    this.onChange = this.onChange.bind(this);
    this.postComment = this.postComment.bind(this);
    this.getComments = this.getComments.bind(this);
    this.getOeuvres = this.getOeuvres.bind(this);
  }

  componentDidMount() {
    this.getOeuvres();
    this.getComments();
  }

  getComments() {
    axios
      .get("/alohomora/commentaires")
      .then(response => response.data)
      .then(response => {
        this.setState({
          comments: response
        });
      });
  }

  getOeuvres() {
    axios
      .get("/alohomora/oeuvres")
      .then(response => response.data)
      .then(response => {
        this.setState({ oeuvres: response });
      });
  }

  postComment(e) {
    e.preventDefault();
    const { texte, name, oeuvres_id } = this.state;
    axios.post("/alohomora/commentaires", {
      texte,
      name,
      oeuvres_id
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { comments, oeuvres } = this.state;
    return (
      <div>
        <h1 className="comment-titre" id="Commentaires">
          Commentaires
        </h1>
        <div className="comments-contain">
          {comments.map((comment, id) => (
            <div className="comment-contain" key={id}>
              <div className="comment-top">
                <h1 className="comment-nom"> De: {comment.name}</h1>
                <h2 className="comment-oeuvre">
                  À propos de : {comment.oeuvre}
                </h2>
              </div>
              <p className="comment-message">{comment.texte}</p>
            </div>
          ))}
          <div className="comments-post">
            <form className="comment-post" onSubmit={this.postComment}>
              <label>Nom :</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <select name="oeuvres_id" onChange={this.onChange} value={this.state.oeuvres_id}>
                <option value="">Oeuvres</option>
                {oeuvres.map((oeuvre, id) => (
                  <option key={id} value={oeuvre.id}>
                    {oeuvre.nom}
                  </option>
                ))}
              </select>
              <label>Commentaire :</label>
              <input
                type="textarea"
                name="texte"
                value={this.state.texte}
                className="comment-text"
                onChange={this.onChange}
              />
              <button type="submit" value="submit" className="comment-button">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Commentaires;
