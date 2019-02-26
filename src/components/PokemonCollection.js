import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  renderPokemon = () => {
    return this.props.pokemons.map(pokemon => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
    });
  };

  render() {
    return <Card.Group itemsPerRow={6}>{this.renderPokemon()}</Card.Group>;
  }
}

export default PokemonCollection;
