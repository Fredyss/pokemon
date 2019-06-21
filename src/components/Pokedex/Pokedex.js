import React from "react";
import axios from "axios";

import "./Pokedex.scss";

export default class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      indexPokemon: null
    };
  }

  handleClick(index) {
    this.setState(state => ({
      indexPokemon: index
    }));
  }

  componentDidMount() {
    this.getPokemons();
  }
  getPokemons = async () => {
    for (let i = 1; i < 10; i++) {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + i.toString()
      );

      // getting name of pokemon
      const namePokemon = res.data.forms[0].name;
      // console.log(namePokemon);

      // getting img path pokemon
      const imgPokemon = res.data.sprites.front_default;
      // console.log(imgPokemon);

      // pushing pokemons to state
      this.setState(prevState => ({
        pokemons: [...prevState.pokemons, { namePokemon, imgPokemon }]
      }));
    }
    // console.log(this.state);
  };

  render() {
    let pokemon;
    let pokemonList;
    if (this.state.pokemons.length === 0) {
      pokemonList = (<h1>Loading</h1>)
    }
    if (this.state.pokemons.length > 1) {
      pokemonList = (
        <div>
            {this.state.pokemons.map((e, i) => {
              return (
                <article key={i} onClick={() => this.handleClick(i)}>
                  <p>{e.namePokemon}</p>
                </article>
              );
            })}
        </div>
      )
    }

    if (this.state.indexPokemon !== null) {
      const k = this.state.indexPokemon;
      // console.log(k);
      // console.log(this.state.pokemons[k].namePokemon);
      // show selected pokemon
      pokemon = (
      <div className="pokemon">
        <h2>Your pokemon is</h2>
        <img src={this.state.pokemons[k].imgPokemon} alt={this.state.pokemons[k].namePokemon} />
        <p>{this.state.pokemons[k].namePokemon}</p>
      </div>
      )
    }

    return (
      <main>
        {pokemonList}
        {pokemon}
      </main>
    );
  }
}
