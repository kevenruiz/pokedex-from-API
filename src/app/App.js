import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from './PokemonList';
import request from 'superagent';
import Search from './PokemonSearch';
import Paging from './Pokemon-Paging';

/*async componentDidMount() {
  const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
  const response = await request.get(url);
  this.setState({ pokemons: response.body.results });

}

*/

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
const POKEMON_TYPES_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex/types';

class App extends Component {

  state = {
    pokemons: [],
    typeState: undefined,
    search: undefined,
    page: 1,
    typeArray: []
  }

  componentDidMount() {
    this.fetchPokemons();
    this.fetchTypes();
  }

  async fetchPokemons() {
    const { search, page, typeState } = this.state;
    console.log(search, page, typeState);

  
    try {
      const response = await request
        .get(POKEMON_API_URL)
        .query({ pokemon: search })
        .query({ page: page })
        .query({ type: typeState });


      this.setState({ pokemons: response.body.results });
      
    }
    catch (err) {
      console.log(err);
    }
    finally {
      this.setState({ loading: false });
    }
  }
  async fetchTypes() {
    try {
      const response = await request
        .get(POKEMON_TYPES_URL);
      this.setState({
        typeArray: response.body.map(booger => booger.type)

      });

    }
    catch (err) {
      console.log(err);
    }
  }


  handleSearch = ({ search, typeState }) => {
    this.setState(
      {
        search: search || undefined,
        page: 1,
        typeState: typeState || undefined
      },
      () => this.fetchPokemons()
    );
  }


  handlePrevPage = () => {
    this.setState(
      { page: Math.max(this.state.page - 1, 1) },
      () => this.fetchPokemons()
    );

  }

  handleNextPage = () => {
    this.setState(
      { page: this.state.page + 1 },
      () => this.fetchPokemons()
    );
  }

  handleTypeChange = ({ target }) => {
    this.setState({ typeState: target.value });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchPokemons();
  }
  handleNameChange = ({ target }) => {
    this.setState({ search: target.value });
  }



  render() {

    const { pokemons, page, typeArray } = this.state;

    console.log(this.state.typeState);



    return (
      <div className="App">
        <Header />

        <main>
          <section className="search-options">
            <Search
              onSubmit={this.handleSearch}
              handleSubmit={this.handleSubmit}
              handleTypeChange={this.handleTypeChange}
              typeArray={typeArray}
              handleNameChange={this.handleNameChange}
            />
            <Paging
              page={page}
              onPrev={this.handlePrevPage}
              onNext={this.handleNextPage}
            />
          </section>

          <PokemonList pokemon={pokemons} />




        </main>
        <Footer />
      
      </div>
    );
  }

}

export default App;
