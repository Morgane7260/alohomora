import React, { Component } from 'react';
import axios from 'axios';

class FiltreSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sides: [],
      activeSideFilter: 'Côté'
    };
    this.handleSelectValue = this.handleSelectValue.bind(this);
  }

  componentDidMount() {
    axios
      .get('/alohomora/side')
      .then(res => res.data)
      .then(result =>
        this.setState({
          sides: result
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
      activeSideFilter: event.target.value
    });
    const { activeSideFilter } = this.state;
    handleFilter(filterType, activeSideFilter);
  }

  render() {
    const { sides, activeSideFilter } = this.state;
    return (
      <div>
        <select className="choix" value={activeSideFilter} onChange={e => this.handleSelectValue('Côté', e)}>
          <option value="">Côté</option>
          {sides.map((side, id) => (
            <option key={id} value={side.nom}>
              {side.nom}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default FiltreSide;
