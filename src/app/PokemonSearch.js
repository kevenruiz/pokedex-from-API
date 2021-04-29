import React, { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {
  state = {
    pokemonFilter: '',
    sortField: '',
    type2Filter: '',
    hpFilter: ''
  }

  handlePokemonChange = ({ target }) => {
    this.setState({ pokemonFilter: target.value });
  }

  handleSortChange = ({ target }) => {
    this.setState({ sortFilter: target.value });
  }
  handleType2Change = ({ target }) => {
    this.setState({ type2Filter: target.value });
  }
  handleHpChange = ({ target }) => {
    this.setState({ hpFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state);
    this.props.onSearch(this.state);
  }


  render() {
    const { pokemonFilter, sortField, type2Filter, hpFilter } = this.state;
    const { hp } = this.props;
    return (
      <form> className='PokemonSearch' onSubmit={this.handleSubmit}
        <input
          pokemon='pokemonFilter'
          value={pokemonFilter}
          onChange={this.handlePokemonChange}
        />
        <select
          name='sortField'
          value={sortField}
          onChange={this.handleSortChange}
        />
        <select
          name='type2Field'
          value={type2Filter}
          onChange={this.handleType2Change}
        />
        <select
          name='hpField'
          value={hpFilter}
          onChange={this.handleHpChange}
        />

      </form>

    );
  }
}
