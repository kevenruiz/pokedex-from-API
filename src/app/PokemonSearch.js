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
  handleNameChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleidChange = ({ target }) => {
    this.setState({ idFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }
  /*componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSubmit(this.state);
    }
  }
  */

  render() {
    const { search, sortField } = this.state;
    const { typeArray, typeFilter } = this.props;



    return (
      <form className='PokemonSearch' onSubmit={this.handleSubmit}>
        <input
          name='search'
          value={search}
          onChange={this.handleNameChange}

        />
        <select
          name='sortField'
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">sort...</option>
          <option value="pokemon">by pokemon</option>
          <option value="id">by id</option>
        </select>
        <select
          name="typeFilter"
          value={typeFilter}
          onChange={this.handleidChange}
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