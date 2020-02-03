import React, { Component } from 'react';
import axios from 'axios';

class FiltreTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      activeTypeFilter: 'Types'
    };
    this.handleSelectValue = this.handleSelectValue.bind(this);
  }

  componentDidMount() {
    axios
      .get('/alohomora/types')
      .then(res => res.data)
      .then(result =>
        this.setState({
          types: result
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
      activeTypeFilter: event.target.value
    });
    const { activeTypeFilter } = this.state;
    handleFilter(filterType, activeTypeFilter);
  }

  render() {
    const { types, activeTypeFilter } = this.state;
    return (
      <div>
        <select className="choix" value={activeTypeFilter} onChange={e => this.handleSelectValue('Type', e)}>
          <option value="">Types</option>
          {types.map((type, id) => (
            <option key={id} value={type.type}>
              {type.type}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default FiltreTypes;
