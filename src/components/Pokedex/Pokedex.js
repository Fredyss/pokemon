import React from 'react';
import axios from 'axios';

import './Pokedex.scss';

export default class Pokedex extends React.Component {
    constructor (props)  {
      super(props);      
      this.state = {
        pokemons: [],
        isToggleOn: false
      }
      this.handleClick = this.handleClick.bind(this);

    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      console.log(this.state.isToggleOn);
    }

  

    componentDidMount() {
       this.getPokemons();
    }
    getPokemons = async () => {
      for(let i = 1; i< 10; i++ ){
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/"+i.toString());

        // getting name of pokemon
        const namePokemon = res.data.forms[0].name;
        // console.log(namePokemon);

        // getting img path pokemon
        const imgPokemon = res.data.sprites.front_default;
        // console.log(imgPokemon);
     
        // pushing pokemons to state
        this.setState(prevState => ({
          pokemons: [...prevState.pokemons, {namePokemon, imgPokemon}]
        }))
      
      }
      // console.log(this.state)  
};

    render() {
       return (
           <main>
               {this.state.pokemons.length === 0 ? (
                   <div>Loading...</div>
               ) : (
                   this.state.pokemons.map((e, i) => {
                       return <article  key={i}
                              onClick={this.handleClick}
                              className= {this.state.isToggleOn ? "show" :""}>
                              <img src={e.imgPokemon} alt={e.namePokemon}/>
                            <p>{e.namePokemon}</p>
                         </article>;
                    })
               )}
           </main>
       );
     }
}