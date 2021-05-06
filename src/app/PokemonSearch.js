import { Component } from 'react';
import './PokemonSearch.css';

export default class Search extends Component {
  state = {
    search: '',
    pokemonFilter: '',
    sortField: '',
    idField: ''

  }
// this is where the old code starts
 /* handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {
    const { search } = this.state;

    return (
      <form className="Search" onSubmit={this.handleSubmit}>

        <input 
          name="search"
          value={search}
          onChange={this.handleSearchChange}
        />

        <button>Search</button>

      </form>
    );
  }

}

// this is where the new code ends. We want to change the new code to fit the data from the API> might need help to make it work together.

*/


  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleTypeChange = ({ target }) => {
    this.setState({ typeFilter: target.value });

  }


  /*componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSubmit(this.state);
    }
  }
  */

  render() {
    const { sortField } = this.state;
    const { typeArray, typeFilter, handleTypeChange, handleSubmit, handleNameChange } = this.props;



    return (
      <form className='PokemonSearch' onSubmit={handleSubmit}>
        <input
          name='search'

          onChange={handleNameChange}

        />
        <select
          name='sortField'
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">sort...</option>
          <option value="pokemon">by pokemon</option>

        </select>
        <select
          name="typeFilter"
          value={typeFilter}
          onChange={handleTypeChange}
        >
          <option value="">All</option>
          {typeArray.map(booger => (
            <option key={booger} value={booger}>{booger}</option>
          ))}
        </select>

        <button>Search</button>
      </form>
    );
  }

}