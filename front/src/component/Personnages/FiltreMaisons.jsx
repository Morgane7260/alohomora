import React, { Component } from 'react';
import axios from 'axios';

class FiltreMaisons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maisons: [],
      activeMaisonFilter: 'Maisons'
    };
    this.handleSelectValue = this.handleSelectValue.bind(this);
  }

  componentDidMount() {
    axios
      .get('/alohomora/maisons')
      .then(res => res.data)
      .then(result =>
        this.setState({
          maisons: result
        })
      )
      .catch(e => {
        console.error(e);
      });
  }

  async handleSelectValue(filterType, event) {
    const { handleFilter } = this.props;
    console.log(event.target);
    await this.setState({
      activeMaisonFilter: event.target.value
    });
    const { activeMaisonFilter } = this.state;
    handleFilter(filterType, activeMaisonFilter);
  }

  render() {
    const { maisons, activeMaisonFilter } = this.state;
    return (
      <div>
        <select className="choix" value={activeMaisonFilter} onChange={e => this.handleSelectValue('Maison', e)}>
          <option value="">Maisons</option>
          {maisons.map((maison, id) => (
            <option key={id} value={maison.nom}>
              {maison.nom}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default FiltreMaisons;