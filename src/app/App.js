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

class App extends Component {

  state = {
    pokemons: [],

    search: undefined,
    page: 1
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  async fetchPokemons() {
    const { search, page } = this.state;




    try {
      const response = await request
        .get(POKEMON_API_URL)
        .query({ pokemon: search })
        .query({ page: page });
      console.log(response.body.results);

      this.setState({ pokemons: response.body.results });
      
    }
    catch (err) {
      console.log(err);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = ({ search }) => {
    this.setState(
      { search: search, page: 1 },
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





  render() {

    const { pokemons, page } = this.state;
    console.log(pokemons);

    return (
      <div className="App">
        <Header />

        <main>
          <Search />
          <PokemonList pokemon={pokemons} />
          <section className="search-options">
            <Search onSubmit={this.handleSearch} />
            <Paging
              page={page}
              onPrev={this.handlePrevPage}
              onNext={this.handleNextPage}
            />
          </section>



        </main>
        <Footer />
      
      </div>
    );
  }

}

export default App;
