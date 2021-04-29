import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from 'PokemonList';
import Pokemon from './Pokemon';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <PokemonList pokemon={Pokemon} />
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
