import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from './PokemonList';
import request from 'superagent';


class App extends Component {

  state = {
    pokemons: []
  }

  async componentDidMount() {
    const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const response = await request.get(url);
    this.setState({ pokemons: response.body.results });

  }


  render() {
    const pokemons = this.state.pokemons;
    return (
      <div className="App">
        <Header />

        <main>
          <PokemonList pokemon={pokemons} />
          <li>
            Hello
          </li>

        </main>
        <Footer />
      
      </div>
    );
  }

}

export default App;
