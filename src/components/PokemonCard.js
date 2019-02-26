import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: this.props.pokemon,
      image: this.props.pokemon.sprites.front
    };
  }

  togglePokemon = () => {
    if (this.state.image === this.props.pokemon.sprites.front) {
      console.log("i'm here");
      this.setState({
        image: this.props.pokemon.sprites.back
      });
    } else {
      this.setState({
        image: this.props.pokemon.sprites.front
      });
    }
  };

  render() {
    console.log(this.state.image);
    return (
      <Card>
        <div onClick={this.togglePokemon}>
          <div className="image">
            <img src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
