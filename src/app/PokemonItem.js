import React, { Component } from 'react';

export default class PokemonItem extends Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div>
        <li>
          {pokemon.pokemon}
          {pokemon.type_1}
          {pokemon.type_2}
          {pokemon.hp}
          {pokemon.pokedex}
          <img src={pokemon.url_image} alt={pokemon.url_image} />
        </li>

      </div>
    );
  }
}
