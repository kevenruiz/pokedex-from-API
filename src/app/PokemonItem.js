import React, { Component } from 'react';
import './PokemonItem.css';

export default class PokemonItem extends Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div>
        <li className="PokemonItem">
          <h2>  {pokemon.pokemon}</h2>
          {pokemon.type_1}
          <p> {pokemon.type_2}</p>
          <p>{pokemon.hp}</p>
          <p>{pokemon.pokedex}</p>

          <img src={pokemon.url_image} alt={pokemon.url_image} />
        </li>

      </div>
    );
  }
}
