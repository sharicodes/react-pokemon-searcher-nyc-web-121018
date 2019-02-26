import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(response => response.json())
      .then(pokemons =>
        this.setState({
          pokemons: pokemons
        })
      );
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(() => console.log("🤔"), 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
        <br />
        <PokemonForm />
      </div>
    );
  }
}

export default PokemonPage;
