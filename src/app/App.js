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
  
        My React App...
        <img src="acl-logo.png" className="temp-images" alt="acl logo" />
      
      </div>
    );
  }

}

export default App;
