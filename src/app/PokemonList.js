import React, { Component } from 'react';
import PokemonItem from './PokemonItem';

export default class PokemonList extends Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(pokemon);
    return (

      <div>
        <ul className="PokemonList">
          {
            pokemon.map(pokemon => (
              <PokemonItem pokemon={pokemon} key={pokemon.pokemon} />
            ))
          }
        </ul>
      </div>
    );
  }
}
