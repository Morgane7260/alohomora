import React, { Component } from "react";
import FiltreSide from "./FiltreSide";
import FiltreMaisons from "./FiltreMaisons";
import FiltreTypes from "./FiltreType";
import Personnages from "./Personnages";
import Nav from "../Acceuil/Nav";
import Footer from "../Acceuil/Footer";
import "./personnages.css";

class Filtres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMaisonFilter: null,
      activeTypeFilter: null,
      activeSideFilter: null
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  async handleFilter(filterType, filterValue) {
    switch (filterType) {
      case "Maison":
        await this.setState({
          activeMaisonFilter: filterValue
        });
        break;
      case "Type":
        await this.setState({
          activeTypeFilter: filterValue
        });
        break;
      case "Côté":
        await this.setState({
          activeSideFilter: filterValue
        });
        break;
      default:
        break;
    }
  }

  render() {
    const {
      activeMaisonFilter,
      activeTypeFilter,
      activeSideFilter
    } = this.state;
    return (
      <div className="persos-grid">
          <Nav />
        <div className="filtre-contain">
          <div className="all-filtres">
            <FiltreMaisons  handleFilter={this.handleFilter}/>
            <FiltreTypes  handleFilter={this.handleFilter}/>
            <FiltreSide  handleFilter={this.handleFilter}/>
          </div>
          <div className="persos-contain">
            <Personnages
              activeMaisonFilter={activeMaisonFilter}
              activeTypeFilter={activeTypeFilter}
              activeSideFilter={activeSideFilter}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Filtres;
